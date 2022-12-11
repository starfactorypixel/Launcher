import axios, {AxiosResponse, AxiosError} from "axios";
import {readFile} from "fs/promises";
import {getType} from "mime";
import {join} from "path";
import * as chalk from "chalk";
import {simpleGit, SimpleGit} from "simple-git";
import {githubToken, appVersion, appPath} from "../config";
import {logger, Logger} from "../logger";

export class ReleaseError extends Error {}

export interface ReleaseInfo {
    id: number;
    url: string;
}

export interface GitCommit {
    hash: string;
    message: string;
}

export interface GitInfo {
    git: SimpleGit;
    repo: string;
    branch: string;
    mainBranch: boolean;
    lastCommit: GitCommit;
}

export async function createRelease(gitInfo: GitInfo): Promise<ReleaseInfo> {
    let response: AxiosResponse;
    let tagName: string;
    let name: string;

    if (gitInfo.mainBranch) {
        tagName = appVersion;
        name = appVersion;
    } else {
        tagName = "";
        name = `${gitInfo.lastCommit.message} (Branch: ${gitInfo.branch}) (Version: ${appVersion} (Alpha))`;
    }

    try {
        response = await axios.post(
            `https://api.github.com/repos/${gitInfo.repo}/releases`,
            {
                tag_name: tagName,
                name,
                draft: !gitInfo.mainBranch
            },
            {
                headers: {
                    Accept: "application/vnd.github+json",
                    Authorization: "Bearer " + githubToken,
                    "X-GitHub-Api-Version": "2022-11-28"
                }
            }
        );
    } catch (error) {
        if (error instanceof AxiosError && error.code === "ERR_BAD_REQUEST") {
            throw new ReleaseError(
                "Release not created.\n\tIt may be necessary to change the package version!"
            );
        } else {
            throw error;
        }
    }
    const {id, html_url: url} = response.data as {id: number; html_url: string};

    return {id, url};
}

export async function uploadReleaseAsset(
    gitInfo: GitInfo,
    releaseId: number,
    name: string,
    path: string
): Promise<string> {
    const type: string = getType(path) ?? "text/plain";
    const data: Buffer = await readFile(path);

    const response: AxiosResponse<{browser_download_url: string}> = await axios.post(
        `https://uploads.github.com/repos/${gitInfo.repo}/releases/${releaseId}/assets?name=${name}`,
        data,
        {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: "Bearer " + githubToken,
                "X-GitHub-Api-Version": "2022-11-28",
                "Content-Type": type
            }
        }
    );

    return response.data.browser_download_url;
}

export async function release(): Promise<void> {
    if (!githubToken) {
        return;
    }

    const git: SimpleGit = simpleGit(appPath);
    const gitBranch: string = (await git.branch()).current;
    const gitMainBranch: boolean = gitBranch === "main";
    const lastCommit: {hash: string; message: string} = (await git.log()).latest ?? {
        hash: "hash",
        message: "message"
    };
    const gitInfo: GitInfo = {
        git,
        repo: "starfactorypixel/Launcher",
        branch: gitBranch,
        mainBranch: gitMainBranch,
        lastCommit
    };

    const progress: Logger.LogProgress = logger.progress("Create release");

    let releaseInfo: ReleaseInfo;
    let winX64Url: string;
    let linuxArm64Url: string;
    let linuxX64Url: string;

    try {
        releaseInfo = await createRelease(gitInfo);

        const buildPath: string = join(appPath, "./build");

        winX64Url = await uploadReleaseAsset(
            gitInfo,
            releaseInfo.id,
            `Setup-${appVersion}-x64.exe`,
            join(buildPath, "./win-x64/Setup-x64.exe")
        );
        linuxArm64Url = await uploadReleaseAsset(
            gitInfo,
            releaseInfo.id,
            `Setup-${appVersion}-arm64.deb`,
            join(buildPath, "./linux-arm64/Setup-arm64.deb")
        );
        linuxX64Url = await uploadReleaseAsset(
            gitInfo,
            releaseInfo.id,
            `Setup-${appVersion}-x64.deb`,
            join(buildPath, "./linux-x64/Setup-amd64.deb")
        );
    } catch (error) {
        if (error instanceof ReleaseError) {
            return logger.error(error.message), process.exit(1);
        } else {
            return console.error(error), process.exit(1);
        }
    } finally {
        progress.stop();
    }

    logger.log(
        chalk.green("Release created.\n") +
            `\tRelease url: ${releaseInfo.url}.\n` +
            `\tRelease assets:\n` +
            `\t\tWindows (x64): ${winX64Url}.\n` +
            `\t\tLinux (arm64): ${linuxArm64Url}.\n` +
            `\t\tLinux (x64): ${linuxX64Url}.\n\n` +
            chalk.blue(`Share (in Markdown format):\n`) +
            `<p>Download <b>Pixel Launcher</b>` +
            ` (Version: <a href="${releaseInfo.url}">${appVersion}${
                !gitInfo.mainBranch ? " (Alpha)" : ""
            }</a>)` +
            `${
                !gitInfo.mainBranch
                    ? ` (Branch: <a href="https://github.com/${gitInfo.repo}/tree/${gitInfo.branch}">${gitInfo.branch}</a>)`
                    : ""
            }:</p>\n` +
            "<p>\n" +
            `\t<a href="${winX64Url}"><img src="https://img.shields.io/static/v1?label=Windows&message=x64&color=blue" /></a>\n` +
            `\t<a href="${linuxArm64Url}"><img src="https://img.shields.io/static/v1?label=Linux&message=arm64&color=yellow" /></a>\n` +
            `\t<a href="${linuxX64Url}"><img src="https://img.shields.io/static/v1?label=Linux&message=x64&color=yellow" /></a>\n` +
            "</p>\n"
    );
}

if (require.main === module) {
    release();
}

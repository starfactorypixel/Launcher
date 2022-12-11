import {build} from "electron-builder";
import {join} from "path";
import {pathExists} from "fs-extra";
import {mkdir} from "fs/promises";
import {appPath, usageDockerBuild} from "../config";
import {exec} from "./utils/exec";

export async function buildWin(): Promise<void> {
    if (usageDockerBuild && process.platform !== "win32") {
        const buildPath: string = join(appPath, "./build");

        if (!(await pathExists(buildPath))) {
            await mkdir(buildPath);
        }

        console.log("Build path:", buildPath);

        await exec("docker build -f Dockerfile.build-win -t pixel-launcher-build-win .");
        await exec(
            "docker run --rm --name pixel-launcher-build-win -v " +
                buildPath +
                ":/app/build" +
                " pixel-launcher-build-win"
        );
    } else {
        const output: string = join(appPath, "./build/win-x64");

        await build({
            win: [],
            x64: true,
            config: {
                directories: {
                    output
                }
            }
        });
    }
}

if (require.main === module) {
    buildWin();
}

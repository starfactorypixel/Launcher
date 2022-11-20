import {build} from "electron-builder";
import {join} from "path";
import {pathExists} from "fs-extra";
import {mkdir} from "fs/promises";
import {appPath, usageDockerBuild} from "../config";
import {exec} from "./utils/exec";

export type BuildLinuxArch = "x64" | "arm64";

export async function buildLinux(arch: BuildLinuxArch = "arm64"): Promise<void> {
    if (usageDockerBuild && process.platform === "win32") {
        const buildPath: string = join(appPath, "./build");

        if (!(await pathExists(buildPath))) {
            await mkdir(buildPath);
        }

        await exec("docker build -f Dockerfile.build-linux -t pixel-launcher-build-linux .");
        await exec(
            "docker run --rm --name pixel-launcher-build-linux -v " +
                buildPath +
                ":/app/build" +
                " -e BUILD_ARCH=" +
                arch +
                " pixel-launcher-build-linux"
        );
    } else {
        const output: string = join(appPath, "./build/linux-" + arch);

        await build({
            linux: [],
            [arch]: true,
            config: {
                directories: {
                    output
                }
            }
        });
    }
}

if (require.main === module) {
    const arch = (process.env.BUILD_ARCH ?? "arm64") as BuildLinuxArch;

    buildLinux(arch);
}

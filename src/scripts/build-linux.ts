import {build} from "electron-builder";
import {join} from "path";
import {appPath} from "../config";
import {exec} from "./utils/exec";

export type BuildLinuxArch = "x64" | "arm64";

export async function buildLinux(arch: BuildLinuxArch = "arm64"): Promise<void> {
    if (process.platform === "win32") {
        const buildPath: string = join(appPath, "./build");

        await exec("docker build . -t dev2alert/pixel-launcher-linux");
        await exec(
            "docker run --rm --name pixel-launcher-linux -v " +
                buildPath +
                ":/app/build -e BUILD_ARCH=" +
                arch +
                " dev2alert/pixel-launcher-linux"
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

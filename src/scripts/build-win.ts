import {build} from "electron-builder";
import {join} from "path";
import {appPath} from "../config";

export async function buildWin(): Promise<void> {
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

if (require.main === module) {
    buildWin();
}

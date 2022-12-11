import {Logger, logger} from "../logger";
import {exec} from "./utils/exec";
import {buildWin} from "./build-win";
import {buildLinux} from "./build-linux";
import {buildLinuxX64} from "./build-linux-x64";

export async function buildAll(): Promise<void> {
    const steps: Logger.LogSteps = {current: 0, max: 5};

    steps.current++;
    logger.log("Build main (entry point):", {steps});
    await exec("npm run build:main", (code) => {
        logger.error("Build main with error (code: " + code + ").");
    });

    steps.current++;
    logger.log("Build view (react app):", {steps});
    await exec("npm run build:view", (code) => {
        logger.error("Build view with error (code: " + code + ").");
    });

    steps.current++;
    logger.log("Build Windows (x64):", {steps});
    await buildWin().catch((error) => {
        logger.error("Build Windows x64 with error.");

        return Promise.reject(error);
    });

    steps.current++;
    logger.log("Build Linux (arm64):", {steps});
    await buildLinux().catch((error) => {
        logger.error("Build Linux arm64 with error.");

        return Promise.reject(error);
    });

    steps.current++;
    logger.log("Build Linux (x64):", {steps});
    await buildLinuxX64().catch((error) => {
        logger.error("Build Linux x64 with error.");

        return Promise.reject(error);
    });

    logger.info("Built all.");
}

if (require.main === module) {
    buildAll();
}

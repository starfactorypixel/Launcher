import "dotenv/config";
import {join} from "path";

export const devMode: boolean = process.env.NODE_ENV === "development";

export const devServerPort = Number(process.env.DEV_PORT ?? 15070);

export const usageWebpackMiddleware: boolean = process.env.WEBPACK_DEV === "1";

export const usageDevTools: boolean = process.env.DEV_TOOLS === "1";

export const usageDevToolsExtensions: boolean = process.env.DEV_TOOLS_EXTENSIONS === "1";

export const appPath: string = join(__dirname, "..");

export const appVersion: string = require(join(appPath, "./package.json")).version;

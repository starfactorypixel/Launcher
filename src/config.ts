import {join} from "path";

export const devMode: boolean = process.env.NODE_ENV === "development";

export const usageWebpackMiddleware: boolean = process.env.WEBPACK_DEV === "1";

export const appPath: string = join(__dirname, "..");
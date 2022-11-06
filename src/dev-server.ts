import * as express from "express";
import {Express} from "express";
import {Compiler, Configuration} from "webpack";

export interface DevServerStartOptions {
    port?: number;
    usageWebpackMiddleware?: boolean;
    publicPath?: string;
}

export interface DevServerInfo {
    port: number;
    url: string;
}

export class DevServer {
    public async startWebpack(app: Express): Promise<void> {
        const {webpack} = require("webpack") as typeof import("webpack");
        const webpackDevMiddleware =
            require("webpack-dev-middleware") as typeof import("webpack-dev-middleware");
        const webpackHotMiddleware =
            require("webpack-hot-middleware") as typeof import("webpack-hot-middleware");

        const config = require("./webpack.config").default() as Configuration;
        const compiler: Compiler = webpack(config);

        app.use(webpackDevMiddleware(compiler));
        app.use(webpackHotMiddleware(compiler));
    }

    public async start({
        port = 15070,
        usageWebpackMiddleware = false,
        publicPath
    }: DevServerStartOptions): Promise<DevServerInfo> {
        const url: string = "http://localhost:" + port + "/";
        const app = express();

        if (usageWebpackMiddleware) {
            await this.startWebpack(app);
        }
        if (publicPath) {
            app.use(express.static(publicPath));
        }

        await app.listen(port);
        return {port, url};
    }
}

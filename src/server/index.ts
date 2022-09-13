import {NestFactory} from "@nestjs/core";
import {NestExpressApplication} from "@nestjs/platform-express";
import type {Compiler, Configuration} from "webpack";
import {AppModule} from "./app.module";

export interface ServerStartOptions {
    devMode: boolean;
    publicPath?: string | null;
    usageWebpackMiddleware?: boolean;
}

export interface ServerInfo {
    port: number;
    url: string;
}

export class Server {
    public async startWebpack(app: NestExpressApplication): Promise<void> {
        const {webpack} = require("webpack") as typeof import("webpack");
        const webpackDevMiddleware = require("webpack-dev-middleware") as typeof import("webpack-dev-middleware");
        const webpackHotMiddleware = require("webpack-hot-middleware") as typeof import("webpack-hot-middleware");
        const config = require("../webpack.config").default() as Configuration;
        const compiler: Compiler = webpack(config);
        app.use(webpackDevMiddleware(compiler));
        app.use(webpackHotMiddleware(compiler));
    }

    public async start({devMode, publicPath = null, usageWebpackMiddleware = false}: ServerStartOptions): Promise<ServerInfo> {
        const port: number = 15070;
        const url: string = "http://localhost:" + port + "/";
        const app: NestExpressApplication = await NestFactory.create<NestExpressApplication>(
            AppModule, 
            {logger: !devMode ? false : undefined}
        );
        if(devMode && usageWebpackMiddleware)
            await this.startWebpack(app);
        if(publicPath !== null)
            app.useStaticAssets(publicPath);
        await app.listen(port);
        return {port, url};
    }
}
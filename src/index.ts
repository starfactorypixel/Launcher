import "dotenv/config";
import {app, screen, BrowserWindow} from "electron";
import {join} from "path";
import {Server, ServerInfo} from "./server";
import {appPath, devMode, usageWebpackMiddleware} from "./config";

(async () => {
    const path: string = appPath;
    await app.whenReady();
    const {width, height} = screen.getPrimaryDisplay().workAreaSize;
    const window = new BrowserWindow({
        width,
        height,
        icon: join(path, "./assets/icon.png"),
        title: "Pixel Launcher",
        frame: false,
        transparent: true,
        resizable: false,
        maximizable: true
    });
    const server = new Server;
    const serverInfo: ServerInfo = await server.start({
        devMode,
        publicPath: join(path, "./view/public"),
        usageWebpackMiddleware
    });
    window.loadURL(serverInfo.url);
    if(devMode)
        window.webContents.openDevTools({mode: "undocked"});
})();
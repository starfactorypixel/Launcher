import {app, screen, BrowserWindow} from "electron";
import {join} from "path";
import {
    appPath,
    devMode,
    devServerPort,
    usageDevToolsExtensions,
    usageDevTools,
    usageWebpackMiddleware
} from "./config";
import {DevServer, DevServerInfo} from "./dev-server";

(async () => {
    await app.whenReady();

    const {width, height} = screen.getPrimaryDisplay().workAreaSize;
    const window = new BrowserWindow({
        width,
        height,
        title: "Pixel Launcher",
        frame: false,
        transparent: true,
        resizable: false,
        maximizable: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    if (devMode) {
        if (usageDevToolsExtensions) {
            const {default: installExtension, REACT_DEVELOPER_TOOLS} =
                require("electron-devtools-installer") as typeof import("electron-devtools-installer");

            for (const extension of [REACT_DEVELOPER_TOOLS]) {
                await installExtension(extension);
            }
        }

        const devServer = new DevServer();
        const publicPath: string = join(appPath, "./view/public");

        const devServerInfo: DevServerInfo = await devServer.start({
            port: devServerPort,
            usageWebpackMiddleware,
            publicPath
        });

        await window.loadURL(devServerInfo.url);
    } else {
        const filePath: string = join(appPath, "./view/public/index.html");

        window.loadFile(filePath);
    }

    if (usageDevTools) {
        window.webContents.openDevTools({mode: "undocked"});
    }
})();

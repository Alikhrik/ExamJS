const { app, BrowserWindow } = require("electron");
const path = require("url");

function createWindow() {
    const mainWindow = new BrowserWindow({
        fullscreen: true,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    const loadingWindow = new BrowserWindow({
        height: 600,
        width: 600,
        backgroundColor: "black",
    });

    mainWindow.loadFile(".//src/index.html");
    mainWindow.on("ready-to-show", () => {
        loadingWindow.close()
        mainWindow.show()
    });

    // mainWindow.webContents.openDevTools();
}

app.on("ready", () => {
    createWindow();
    app.on("window-all-closed", () => {
        if (process.platform !== "darwin") app.quit();
    });
});
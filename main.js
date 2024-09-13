// main.js

const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
    const mainWindow = new BrowserWindow({
        width: 1300,
        height: 800,
        autoHideMenuBar: true,
        resizable: false,
        icon: path.join(__dirname, 'logo.png'),
        webPreferences: {
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false,
            spellcheck: false   
        }
    });
    mainWindow.setMenu(null);
    mainWindow.loadFile(path.join(__dirname, 'Home', 'index.html'));

    //mainWindow.setIcon('./logo.png');
}   

app.whenReady().then(() => {    
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();    
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

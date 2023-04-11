const path = require('path');
const url = require('url');
const{app, BrowserWindow} = require('electron');

let win;

function createWindow() {

  win = new BrowserWindow({
    width: 1024,
    height: 1024,
    icon: __dirname + "/img/icon.jpg"
  });
  win.loadURL(url.format({
    pathnames: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

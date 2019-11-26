const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    title: 'AMSJXNU IT Club'
  });

  win.setIcon(__dirname + '/icon.png');

  win.setMenu(null);

  win.setMenuBarVisibility(false);

  win.removeMenu();

  win.setTitle('AMSJXNU IT Club');

  win.webContents.on('did-start-loading', () => {
      win.setTitle('Loading...');
  });

  win.loadURL('https://aitc.cstu.gq');

  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
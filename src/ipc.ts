// Inter Process Communication
// This file contains the code that will talk with the browser's code.

import { ipcMain } from 'electron';

export default (browserWindow: Electron.BrowserWindow) => {
  ipcMain.on('Titlebar_minimize', () => browserWindow.minimize());
  ipcMain.on('Titlebar_close', () => browserWindow.close());
};

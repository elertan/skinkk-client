// Inter Process Communication
// This file contains the code that will talk with the browser's code.

import { ipcMain } from 'electron';

export default (browserWindow: Electron.BrowserWindow) => {
  // You can't omit the function between calling the function on the browserWindow object
  // This will cause a parameter from the ipcMain event to be passed into the browserWindow's function throwing errors.
  ipcMain.on('Titlebar_minimize', () => browserWindow.minimize());
  ipcMain.on('Titlebar_maximize', () => browserWindow.maximize());
  ipcMain.on('Titlebar_close', () => browserWindow.close());
};

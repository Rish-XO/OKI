const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  ping: (ip) => ipcRenderer.invoke('ping', ip),
});

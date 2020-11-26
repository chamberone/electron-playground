import { PLAYGROUND_FILE_URL, PRELOAD_FILE } from 'app/config'
import { BrowserWindow } from 'electron'
import { CreateWindowHandler } from '..'

const OPTIONS: Electron.BrowserWindowConstructorOptions = {
  width: 960,
  height: 640,
  minWidth: 960,
  minHeight: 640,
  fullscreen: true,
  titleBarStyle: 'hidden',
  autoHideMenuBar: true,
  webPreferences: {
    nodeIntegration: true,
    webSecurity: false,
    preload: PRELOAD_FILE,
    enableRemoteModule: true,
  }
}

const URL = `${PLAYGROUND_FILE_URL}#/editor`

export const createEditorWindow: CreateWindowHandler = () => {
  const win = new BrowserWindow(OPTIONS)
  win.loadURL(URL)

  return win
}

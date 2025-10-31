import { ipcMain } from 'electron';

export function onBrowserWindowCreated(window) {
  try {
    window.webContents.on('before-input-event', async (event, input) => {
      if (input.key === 'Escape' && input.type === 'keyDown' && window.isFocused()) {
        event.preventDefault();
        window.webContents.send('LiteLoaderQQNT-Esc-Shortcut-Key.onPressEscape');
      }
    });

    // 监听隐藏窗口请求
    ipcMain.on('LiteLoaderQQNT-Esc-Shortcut-Key.hideMainWindow', () => {
      if (window && !window.isDestroyed()) {
        window.hide();
      }
    });

    // 监听关闭窗口请求
    ipcMain.on('LiteLoaderQQNT-Esc-Shortcut-Key.closeMainWindow', () => {
      if (window && !window.isDestroyed()) {
        window.close();
      }
    });
  } catch (err) {
    console.error(err);
  }
}
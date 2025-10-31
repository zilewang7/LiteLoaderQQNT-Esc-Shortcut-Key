// Electron 主进程 与 渲染进程 交互的桥梁
import { contextBridge, ipcRenderer } from 'electron';

// 在渲染进程的全局对象上暴露对象
contextBridge.exposeInMainWorld('escShortcut', {
  // 按下 ESC 键时触发的事件
  onPressEscape: (callback) => {
    ipcRenderer.on(
      'LiteLoaderQQNT-Esc-Shortcut-Key.onPressEscape',
      (...args) => callback(...args)
    );
  },
  // 隐藏窗口（macOS 使用）
  hideMainWindow: () => {
    ipcRenderer.send('LiteLoaderQQNT-Esc-Shortcut-Key.hideMainWindow');
  },
  // 关闭窗口（Windows/Linux 使用）
  closeMainWindow: () => {
    ipcRenderer.send('LiteLoaderQQNT-Esc-Shortcut-Key.closeMainWindow');
  }
});
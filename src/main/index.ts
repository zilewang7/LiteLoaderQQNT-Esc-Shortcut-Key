export function onBrowserWindowCreated(window) {
  try {
    window.webContents.on('before-input-event', async (event, input) => {
      if (input.key == 'Escape' && input.type === 'keyDown' && window.isFocused()) {
        event.preventDefault();
        window.webContents.send('LiteLoaderQQNT-Esc-Shortcut-Key.onPressEscape', { test: 'test' });
      }
    });
  } catch (err) {
    console.error(err);
  }
}
// 仅在没有 hook 过时才引入
if (!window.isProxyProxy) {
  import('../../LiteLoaderQQNT-lite_tools/src/render_modules/hookVue3.js');
}

let escapeClickTime = 0;
let escapeTimer: number | null = null;

// 监听 Escape 事件
window.escShortcut.onPressEscape(() => {
  switch (location.hash) {
  case '#/main/message':
    if (
      !document.querySelector('.empty-panel')
        || (document.querySelector('.recent-contact-list') as HTMLElement)?.style.display === 'none'
    ) {
      (
          document.querySelector(
            '.two-col-layout__aside .recent-contact .list-toggler'
          ) as HTMLElement & {
            __VUE__: [unknown, { proxy: { goBackMainList: () => void } }];
          }
      )?.__VUE__?.[1]?.proxy?.goBackMainList();
    } else {
      const now = Date.now().valueOf();
      if (now - escapeClickTime <= 1000) {
        // 双击，关闭窗口
        window.close();
      }
      escapeClickTime = now;

      // 清除之前的计时器
      if (escapeTimer) {
        clearTimeout(escapeTimer);
      }
      // 500ms 后重置状态
      escapeTimer = window.setTimeout(() => {
        escapeClickTime = 0;
        escapeTimer = null;
      }, 500);
    }
    break;
  default:
    if (location.hash?.startsWith('#/main/')) {
      location.hash = '#/main/message';
    } else {
      window.close();
    }
  }
});

export const onSettingWindowCreated = (view: HTMLElement) => {
  const title = document.createElement('h1');
  title.innerText = '暂无可设置项\n饼：支持自定义按键，支持配置是否关闭窗口';
  view.appendChild(title);
};

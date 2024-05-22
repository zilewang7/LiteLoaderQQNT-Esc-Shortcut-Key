import '../../LiteLoaderQQNT-lite_tools/src/render_modules/hookVue3.js';

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    switch (location.hash) {
    case '#/main/message':
      if (
        document.querySelector('.recent-contact-item--selected')
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
        window.close();
      }
      break;
    default:
      window.close();
    }
  }
});

export const onSettingWindowCreated = (view: HTMLElement) => {
  const title = document.createElement('h1');
  title.innerText = '暂无可设置项\n饼：支持自定义按键，支持配置是否关闭窗口';
  view.appendChild(title);
};

// 用于 apiOrigin 一般用于 html img 标签的 src 里
const apiOrigin =
  process.env.NODE_ENV === 'development'
    ? 'http://oa-test.zhenguanyu.com'
    : window.location.origin;

const appConfig = Object.freeze({
  apiOrigin,
});

const install = (Vue) => {
  Vue.prototype.$appConfig = appConfig;
};

export { appConfig };

export default {
  install,
};

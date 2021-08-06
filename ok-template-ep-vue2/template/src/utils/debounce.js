/**
 * 函数防抖，返回有防抖功能的新函数。
 * 新函数的返回值是一个Promise，resolve原函数的返回值
 * @param {function} fn 要执行的函数
 * @param {number} timeout 防抖时间，单位ms
 */
export function debounce(fn, timeout = 500) {
  let timer = null;

  return function(...args) {
    const _this = this;

    timer && clearTimeout(timer);

    return new Promise((resolve) => {
      timer = setTimeout(() => {
        resolve(fn.call(_this, ...args));
      }, timeout);
    });
  };
}

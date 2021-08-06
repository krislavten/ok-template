/**
 * 此文件只给 yapi 模块用。
 * 除了 yapi，其他模块请不要引用此文件，请直接引用 'axios'
 */
import axios from 'axios';
import errorMessager from './errorMessager';

const excludeUrlRegs = [
  // 如果某些接口不想要自动错误提示，将匹配url的正则表达式添加在这个数组里
];

export default function request(
  payload,
  options = {
    server: 'mock',
    // server: 'dev',
    // server: 'prod',  // todo 后端接口开发好了后，开放这里
  }
) {
  // 基本地址
  const baseUrl =
    options.server === 'mock'
      ? payload.mockUrl
      : options.server === 'dev'
      ? payload.devUrl
      : payload.prodUrl;
  // 请求地址
  const url = `${baseUrl}${payload.path}`;
  // 具体请求逻辑
  return new Promise((resolve, reject) => {
    return axios({
      method: payload.method,
      url,
      data: payload.data,
      params: payload.params,
    })
      .then(({ data }) => {
        /* 这里不放在拦截器里去处理是因为：只有有些接口不符合 code message data 的结构，不符合 code 为 0 代表成功的约定 */
        /* 而新接口都从符合约定，并且都从yapi生成，所以可以在这里统一处理 */
        if (data.code === 0) {
          resolve(data);
        } else {
          throw new Error(data.message || data.errmsg);
        }
      })
      .catch((err) => {
        if (!excludeUrlRegs.some((reg) => reg.test(url))) {
          errorMessager.send(err.message || '请求失败');
        }

        reject(err);
      });
  });
}

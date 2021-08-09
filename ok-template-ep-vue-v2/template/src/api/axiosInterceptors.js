import { isWework } from '@/utils/browser';
import axios from 'axios';

// 请求拦截器
axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function handleUnauthorized() {
  if (isWework()) {
    // 企业微信中尝试自动登录
    window.location.replace(
      `https://qywx.zhenguanyu.com/wechatLogin?from=${encodeURIComponent(
        window.location.href
      )}&outip=true&addr=qywx.zhenguanyu.com`
    );
  } else {
    window.location.href = `https://account.zhenguanyu.com/login?service=${encodeURIComponent(
      window.location.href
    )}`;
  }
}

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    if (error?.response?.status === 401) {
      handleUnauthorized();
    }

    return Promise.reject(error);
  }
);

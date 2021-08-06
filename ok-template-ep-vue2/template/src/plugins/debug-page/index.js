import axios from 'axios';
import router from '@/router';

// 添加动态路由 /debug-page 页面
router.addRoutes([
  {
    path: '/debug-page',
    name: 'DebugPage',
    component: () => import('./DebugPage.vue'),
  },
]);

// 当 localStorage 里有 _debug_ldap_ 字段时，使用调试 ldap
axios.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV !== 'production') {
      const debugLdap = localStorage.getItem('_debug_ldap_');
      if (debugLdap) {
        config.url += config.url.includes('?')
          ? `&_debug_ldap_=${debugLdap}`
          : `?_debug_ldap_=${debugLdap}`;
      }
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

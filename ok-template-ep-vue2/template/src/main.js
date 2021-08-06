import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import config from './config';
import './api/axiosInterceptors'; // 加载axios拦截器
import './plugins/debug-page';
import Antd, { message } from 'ant-design-vue';
import errorMessager from '@/api/errorMessager';
import VueCompositionAPI from '@vue/composition-api';
import 'ant-design-vue/dist/antd.less';

Vue.config.productionTip = false;

Vue.use(config);
Vue.use(Antd);
Vue.use(VueCompositionAPI);

errorMessager.setMessagerFunction(message.error.bind(message));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

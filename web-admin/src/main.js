import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 全局引入icon-font
import '@/icons';

import './plugins/element';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './plugins/plugin-buefy';
import './plugins/plugin-luxon';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
}).$mount('#app');

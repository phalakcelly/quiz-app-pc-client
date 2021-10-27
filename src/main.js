import './init'
import Vue from 'vue';
import store from '@/store';

import App from './App.vue';

Vue.config.productionTip = false


import router from '@/router';

new Vue({
  router,
  store,
 
  render: h => h(App),
}).$mount('#app')

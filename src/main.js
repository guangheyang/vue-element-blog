import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import "./assets/reset.css"
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';

import router from './router/router'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

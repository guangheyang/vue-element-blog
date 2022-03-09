import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import "./assets/reset.css"
// import VueQuillEditor from 'vue-quill-editor'
// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'
// import { timeHandle } from '@/utils/filter'

// Vue.use(VueQuillEditor)
import router from './router/router'
Vue.config.productionTip = false
Vue.use(ElementUI);
// 时间戳过滤器
// Vue.filter('timeStr', value => timeHandle(value, 'YYYY-MM-DD HH:mm:ss'));
// Vue.filter('timeMMMM', value => timeHandle(value, 'DD MMMM YYYY'));
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/reset.css"
import moment from 'moment'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)
import router from './router/router'
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.filter('timeStr', value => {
  if (value === '') return
  return moment(value).format('YYYY-MM-DD HH:mm:ss ');
});
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

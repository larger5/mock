import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入第三方ajax请求方法
import axios from 'axios'
import App from './App.vue'
import Mock from './mock'

// 绑定ajax请求
Vue.prototype.$http = axios;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});

import Vue from 'vue'
import App from './App.vue'
import "./assets/css/reset.css"
import "./assets/js/rem.js"
// 字体图标
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css"
// 路由
import router from "./router"
// 引入axios
import "./axios/index.js"
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

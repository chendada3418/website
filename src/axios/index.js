import axios from "axios";
import Vue from "vue"

// 添加到原型上
Vue.prototype.$axios = axios;

export default axios;
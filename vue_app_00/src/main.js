import Vue from 'vue'
import App from './App.vue'
import router from './router'

import MintUI from "mint-ui"
import'mint-ui/lib/style.css'

Vue.use(MintUI)
//1.4挑组件用
import "./font/iconfont.css"
//1.5从npm_modules引入axios库
import axios from "axios"
//1.6设置属性发送ajax请求时保存session信息
axios.defaults.withCredentials=true
//1.7设置ajax请求基础路径，必须写127.0.0.1不能写localhost
axios.defaults.baseURL="http://127.0.0.1:8080/"
//1.8将axios注册vue实例,放在原型链Vue的prototype上
Vue.prototype.axios=axios
//1.9 引入vuex第三方模块
import Vuex from "vuex"
//1.10注册Vuex
Vue.use(Vuex)
//1.11创建Vuex存储实例对象
var store=new Vuex.Store({
  state:{
    cartCount:0,
  },
  mutations:{
    increment(state){
      state.cartCount++;
    },
  },
  getters:{
    getCartCount(state){
      return state.cartCount;
    },
  },
  actions:{}
})
new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')

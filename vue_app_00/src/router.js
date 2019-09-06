import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/boutique/Home.vue"
import Login from "./components/boutique/common/Login.vue"
import Product from "./components/boutique/common/Product.vue"
import Cart from "./components/boutique/common/Cart.vue"
import Center from "./components/boutique/common/Center.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/login',component:Login},
    {path:'/product',component:Product},
    {path:'/center',component:Center},
  ]
})

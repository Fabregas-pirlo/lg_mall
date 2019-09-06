<template>
  <div class="page-wrap">
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="index">
        <div class="top">
          <div class="zoom"></div>
          <div class="search">
            <input type="text" placeholder="请输入搜索内容">
          </div>
        </div>
        <carousel
          :firstImage="require('../../assets/carousel1.png')"
          :secondImage="require('../../assets/carousel2.png')"
          :thirdImage="require('../../assets/carousel3.png')"
          
        ></carousel>
        
      </mt-tab-container-item>
      
      <mt-tab-container-item id="all">
        <product></product>
      </mt-tab-container-item>

      <mt-tab-container-item id="cart">
        <cart></cart>
      </mt-tab-container-item>

      <mt-tab-container-item id="center">
        <center
        
        ></center>
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar fixed v-model="active">
      <mt-tab-item id="index" @click.native="changeState(0)">
        <tabbaricon
          :selectedImage="require('../../assets/host_selected.png')"
          :normalImage="require('../../assets/host_normal.png')"
          :focused="currentIndex[0].isSelect"
        ></tabbaricon>首页
      </mt-tab-item>

      <mt-tab-item id="all" @click.native="changeState(1)">
        <tabbaricon
          :selectedImage="require('../../assets/all_selected.png')"
          :normalImage="require('../../assets/all_normal.png')"
          :focused="currentIndex[1].isSelect"
        ></tabbaricon>全部商品
      </mt-tab-item>

      <mt-tab-item id="cart" @click.native="changeState(2)">
        <tabbaricon
          :selectedImage="require('../../assets/cart_selected.png')"
          :normalImage="require('../../assets/cart_normal.png')"
          :focused="currentIndex[2].isSelect"
        ></tabbaricon>购物车
      </mt-tab-item>

      <mt-tab-item id="center" @click.native="changeState(3)">
        <tabbaricon
          :selectedImage="require('../../assets/ic_me_selected.png')"
          :normalImage="require('../../assets/ic_me_normal.png')"
          :focused="currentIndex[3].isSelect"
        ></tabbaricon>个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import TabBarIcon from "./common/TarBarIcon.vue";
import Carousel from "./common/Carousel.vue";
import Product from "./common/Product.vue"
import Cart from "./common/Cart.vue"
import Center from "./common/Center.vue"

export default {
  data() {
    return {
      active: "index",
      currentIndex: [
        { isSelect: true },
        { isSelect: false },
        { isSelect: false },
        { isSelect: false }
      ]
    };
  },
  components: {
    tabbaricon: TabBarIcon,
    carousel: Carousel,
    product: Product,
    cart:Cart,
    center:Center,
  },
  methods: {
    changeState(n) {
      for (var i = 0; i < this.currentIndex.length; i++) {
        if (n == i) {
          this.currentIndex[i].isSelect = true;
        } else {
          this.currentIndex[i].isSelect = false;
        }
      }
    }
  }
};
</script>

<style scoped>
  .top{
    display: flex;
    justify-content: space-between;
  }
  .zoom{
    width:40px;
    height:40px;
    background: url(../../assets/zoom.png) no-repeat;
    background-size:60%; 
    margin-left: 60px;
  }
  .search{
    width:300px;
    height:40px;
  }
  .search>input{
    border-radius: 10px;
  }
</style>
<template>
    <div class="product-app">
        
        <div class="goods-item" v-for="(item,index) of list" :key="index">
            <img :src="'http://127.0.0.1:8080/'+item.img_url">
            <h5>{{item.lname}}</h5>
            <div class="all">
                <div class="info">{{item.price}}</div>
                <div class="addcart" @click="addcart" :data-lid="item.lid" :data-price="item.price" :data-lname="item.lname"></div>
            </div> 
        </div>
        <mt-button @click="jumpCart">查看购物车</mt-button>
        <mt-button size="large" @click="loadMore">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[],
            pno:0
        }
    },
    created() {
        this.$nextTick(()=>{
            this.loadMore();
        })
    },
    methods:{
        jumpCart(){
            this.$router.push("/Cart");
        },
        loadMore(){
            var url = "product";
            this.pno++;
            var obj = {pno:this.pno}
            this.axios.get(url,{params:obj}).then(res=>{  
                    var rows=this.list.concat(res.data.data);
                    this.list=rows;
                
            })
        },
        addcart(e){
            var lid=e.target.dataset.lid;
            var n=e.target.dataset.lname;
            var p=e.target.dataset.price;
            var url="addcart";
            var obj={lid:lid,lname:n,price:p};
            this.axios.get(url,{params:obj})
            .then(res=>{
                if(res.data.code==-1){
                    this.$messagebox("消息","请先登录")
                    .then(res=>{
                        this.$router.push("/login");
                    })
                }else if(res.data.code==-2){
                    this.$toast("添加失败")
                }else{
                    this.$toast("添加成功");
                }
            })
        }
    }
}
</script>

<style scoped>
/*1:最外层父元素:弹性布局*/
.product-app{
  display: flex;/*弹性布局*/
  flex-wrap:wrap;/*指定子元素换行*/
  justify-content: space-around;/*两端对齐*/
  padding:4px;/*内边距*/
}
/*2:修饰当前商品 49%*/
.goods-item{
  width:49%;
  border:1px solid #ccc;/*商品灰色边框*/
  border-radius: 5px;/*圆角*/
  margin:2px 0;
  padding:2px;
  box-sizing: border-box;/*重新计算元素宽度*/
  display: flex;
  flex-direction: column;/*商品内容按列排放*/
  min-height: 249px;/*高度*/
}
/*3:修饰当前商品中图片 10:18*/
.goods-item img{
  width:100%;
  height: 60%;
  
}
/*4:修饰当前商品价格*/
.goods-item .info{
  color:red;
  font-size:19px;
}
.all{
    display: flex;
    justify-content:space-around;
}
.addcart{
    background: url(../../../assets/cart_normal.png) no-repeat;
    width: 50px;
    height:50px;
    background-size:39%; 
    margin-left:50px;
}
</style>
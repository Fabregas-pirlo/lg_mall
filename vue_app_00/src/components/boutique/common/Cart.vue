<template>
    <div class="cart">
        <!-- 1顶部复选框，全选 -->
        <div class="selectAll">
            <!-- 1.顶部按钮：全选 -->
            全选<input type="checkbox">
        </div>
        <!-- 2.购物车商品信息 -->
        <div class="cart-item" v-for="(item,index) of list" :key="index">
            <div class="leftText">
                <!-- 用v-model和item的cb状态进行绑定 -->
                <input type="checkbox" v-model="item.cb">
                <div class="lname">{{item.lname}}</div>
                <div class="price">￥{{(item.price*item.count).toFixed(2)}}</div>
            </div>
            <div @click="handler" class="counter">
                <button :data-i="index" data-n="-1" :disabled="item.count==0">-</button>{{item.count}}
                <button :data-i="index" data-n="+1">+</button>
            </div>
            
            <mt-button @click="delItem" :data-id="item.id">删除</mt-button>
        </div>
        <!-- 3.购物车中商品数量，删除选中商品，清空购物车 -->
        <div>
            <mt-button @click="delItems">删除选中商品</mt-button>
            总价：<span style="color:red">￥{{total.toFixed(2)}}</span>
            <mt-button>清空购物车</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.loadMore();
    },
    
    methods:{
        handler(e){
            var i=e.target.dataset.i;
            this.list[i].count+=parseInt(e.target.dataset.n);
        },
        loadMore(){
            var url="carts";
            this.axios.get(url).then(res=>{
                console.log(res);
                if(res.data.code==-1){
                    this.$messagebox("消息","请登录").then(res=>{
                        this.$router.push("/Login");
                        return;
                    });
                }else{
                    var rows=res.data.data;
                    console.log(rows);
                    for(var item of rows){
                        item.cb=false;
                        //this.$store.commit("increment")
                    }
                    this.list=rows;
                }
            })
        },
        delItem(e){
            // 功能：删除购物车中指定商品
            // 获取购物车id
            var id=e.target.dataset.id;
            // 交互提示用户是否删除指定商品
            this.$messagebox.confirm("是否删除商品")
            .then(res=>{
                // 同意
                // 发送ajax服务器端程序
                var url="delItem";
                var obj={id:id};
                this.axios.get(url,{params:obj}).then(res=>{
                    if(res.data.code>0){
                        this.$toast("删除成功");
                        // 返回服务器返回内容
                        //重新调用loadMore最新购物列表查询
                        this.loadMore();
                    }
                })   
            }).catch(err=>{});
        },
        delItems(){
            this.$messagebox.confirm("是否删除商品?")
            .then(res=>{
                var str="";
                for(var item of this.list){
                    if(item.cb){
                        str+=item.id+","
                    }
                }
                str=str.substring(0,str.length-1);
                if(str==""){
                    this.$toast("请选择需要删除的商品");
                    return;
                }
                url="delItems";
                var ids={ids:str};
                this.axios.get(url,{params:ids})
                .then(res=>{
                    if(res.data.code==-1){
                        this.$toast("删除失败");
                    }else{
                        this.$toast("删除成功");
                        this.loadMore();
                    }
                })
            }).catch(err=>{console.log(err);})
        },
        
    },
    computed:{
        total(){
            return this.list.filter(item=>item.cb)
            .reduce((prev,item)=>prev+item.price*item.count,0)
        }
    }
}
</script>

<style scoped>
   .cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  margin-top: 25px;
}
.leftText {
  display: flex;
  align-items: center;
}
.leftText img {
  margin-left: 18px;
  width: 50px;
  height: 50px;
}
.lname {
  margin-left: 25px;
}
.price {
  margin-left: 25px;
  color: red;
}
.counter{
    display: flex;
    justify-content: space-between
}
</style>


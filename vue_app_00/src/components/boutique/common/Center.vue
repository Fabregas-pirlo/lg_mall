<template>
    <div>
        <div class="crown">

        </div>
        <div class="jifen">
            <div>
                <p>0</p>
                <p>积分</p>
            </div>
            <div>
                <p>￥0</p>
                <p>余额</p>
            </div>
        </div>
        <div class="order"></div>
        <div class="delivery">
            <ul>
                <li>
                    <a><img src="../../../assets/wallet.png"></a>
                    <p>待支付</p>
                </li>
                <li>
                    <a><img src="../../../assets/send.png"></a>
                    <p>待发货</p>
                </li>
                <li>
                    <a><img src="../../../assets/receive.png"></a>
                    <p>待收货</p>
                </li>
                <li>
                    <a><img src="../../../assets/comment.png"></a>
                    <p>待评价</p>
                </li>
            </ul>
        </div>
        <div class="mycart">
            <div>
                <img src="../../../assets/cart_normal.png">

                <router-link to="Cart.vue">我的购物车</router-link>
            </div>

        </div> 
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .crown{
        width:400px;
        height:85px;
        border:1px solid #000;
    }
    .jifen{
        display:flex;
        justify-content: space-around;
         width:360px;
        height:85px;
        border:1px solid #000;
    }
    .jifen>div{
        text-align: center
    }
    .order{
         width:400px;
        height:60px;
        border:1px solid #000;
    }
    .delivery{
            width:370px;
            height:100px;
            border:1px solid #000;
            margin: 0 auto;
    }
    .delivery ul{
            width:300px;
            list-style:none;
            display:flex;
            justify-content: space-around;
            
    }
    .delivery ul>li{
        width:65px;
        height:80px;
    }
    .delivery ul>li>a>img{
        width:49px;
        height:44px;
    }
    .delivery ul>li>p{
        margin: 0;
        color: #666;
        font-size: 14px;
    }
    .mycart>img{
        width:30px;
    }
</style>
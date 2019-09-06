<template>
    <div>
        <!-- 面板组件 -->
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1">首页</mt-tab-container-item>
            <mt-tab-container-item id="tab2">购物车</mt-tab-container-item>
            <mt-tab-container-item id="tab3">购物车2</mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航栏 -->
        <mt-tabbar fixed v-model="active">
            <mt-tab-item id="tab1">
                <img slot="icon" src="../../assets/01.png" alt="">
                首页
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <img slot="icon" src="../../assets/02.png" alt="">
                购物车
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <img slot="icon" src="../../assets/03.png" alt="">
                购物车2
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
export default {
    data(){
        return{
            active:"tab1"
        }
    }
}
</script>
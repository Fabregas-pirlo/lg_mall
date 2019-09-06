<template>
    <div>
        <h1>子组件</h1>
        <!-- （1）显示父组件的数据 -->
        <!-- 为h3绑定点击事件，函数由父组件传入 -->
        <h3 @click="add3">{{msg}}</h3>
        <img :src="img3">
    </div>
</template>

<script>
export default {
    // (2)声明接收父组件数据msg,类型是字符串
    props:{
        img3:{default:""},//图片路径
        msg:{default:""},//显示文字
        add3:{type:Function}
    }
}
</script>
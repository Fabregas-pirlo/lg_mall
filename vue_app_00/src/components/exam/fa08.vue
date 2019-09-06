<template>
    <div>
        <h1>父组件</h1>
        <!-- 3调用子组件 -->
        <!-- 父组件传参给子组件,可以传数据和函数 -->
        <sub08 msg="测试数据123" :add3="myadd3" :img3="require('../../assets/02.png')"></sub08>


    </div>
</template>

<script>
//1引入子组件
import sub08 from "./sub08.vue"
export default {
    data(){
        return{}      
    },
    //2注册子组件
    components:{
        "sub08":sub08
    },
    methods:{
        myadd3(){
            console.log("the function yr father created")
        }
    }
}
</script>
<template>
    <div>
        <h1>src/components/exam/Exam02.vue</h1>
        <h3>自定义组件Exam02.vue</h3>
        <button @click="addsuccess">click me</button>
        <button @click="handle2">显示交互式提示框</button>
        <button @click="handle3">显示确认框</button>
        <button @click="handle4">输入框</button>
    </div>
</template>

<script>
export default {
    methods:{
        addsuccess(){
            this.$toast({
                message:"添加成功",
                position:"top",
                iconClass:"iconfont icon-chenggong"              
            })
        },
        handle2(){
            this.$messagebox("消息","数据加载成功")
        },
        handle3(){
            this.$messagebox.confirm("是否删除数据")
            .then(res=>{console.log(res)}).catch(err=>{console.log(err);})
            console.log(2);
            console.log(3);
        },
        handle4(){
            this.$messagebox.prompt("请输入信息")
            .then((value,action)=>{
                console.log(value);
                console.log(action);
            }).catch(err=>{
                console.log(err);
            })
        }
    },

}
</script>
<template>
    <div>
       <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlength:10}" v-model="uname"></mt-field>
       <mt-field label="密码" placeholder="请输入密码" type="password" :attr="{maxlength:10}" v-model="upwd"></mt-field>
       <mt-field label="年龄" placeholder="请输入年龄" type="number" v-model="age"></mt-field>
       <mt-button size="large" @click="reg">用户注册</mt-button>

    </div>
</template>

<script>
export default {
    data(){
        return{uname:"",upwd:"",age:""}
    },
    methods:{
        reg(){
            console.log(1);
            //功能：验证用户输入表单
            //1创建正则表达式一，用户名和密码3-12位，字母数字
            var regu=/^[a-z0-9]{3,12}$/i;
            //2.创建年龄正则表达式，2位数字
            var rega=/^[0-9]{2}$/;
            //3.获取用户名
            var u=this.uname;
            //4.获取密码
            var p=this.upwd;
            //5.获取年龄
            var a=this.age;
            console.log(u+":"+p+":"+a)
            //6.验证用户名，如果出错交互
            if(!regu.test(u)){
                this.$messagebox("消息","用户名格式不正确");
                return;
            }
            //7验证密码
            if(!regu.test(p)){
                this.$messagebox("消息","密码格式不正确");
                return;
            }
            //8验证数字
            if(!rega.test(a)){
                this.$messagebox("消息","年龄格式不正确");
                return;
            }
            

        }
    }
}
</script>
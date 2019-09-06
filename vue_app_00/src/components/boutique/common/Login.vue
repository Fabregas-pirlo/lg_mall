<template>
    <div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="uname"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="upwd"></mt-field>
        <mt-button size="large" @click="login">登录</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
            var u=this.uname;
            var p=this.upwd;
            var reg=/^[0-9a-zA-Z]{3,12}$/i;
            if(!reg.test(u)){
                this.$toast("用户名格式不正确");
                return;
            }
            if(!reg.test(p)){
                this.$toast("密码格式不正确");
                return;
            }
            var url="login";
            var obj={uname:u,upwd:p};
            this.axios.get(url,{params:obj})
            .then(res=>{
                var code=res.data.code;
                if(code==-1){
                    this.$messagebox("消息","用户名或密码有误");
                }else{
                    this.$router.push("/product")
                }
            })
        }
    }
}
</script>
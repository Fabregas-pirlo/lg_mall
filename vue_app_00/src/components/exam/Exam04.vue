<template>
    <div>
    <h1>66666666666666</h1>
    <mt-switch v-model="val" @change="handle">
        开关选项
    </mt-switch>

    <mt-radio title="radio" :options="['a','b','c']" v-model="val2"></mt-radio>
    <mt-button @click="getval">获取用户输入的值</mt-button>

    <mt-radio title="how old is dong" v-model="val4" :options="options"></mt-radio>
    <mt-button @click="get4"></mt-button>

    <!-- 复选框 -->
    <mt-checklist title="复选框" v-model="val5" :options="['choice a','choice b','choice c']">
    </mt-checklist>
    <mt-button @click="get5">获取值</mt-button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            val:true,
            val2:"",  
            val4:"",
            options:[
                {label:"last year",value:"50"},
                {label:"this year",value:"51"},
                {label:"next year",value:"52"}
            ],
            val5:[]
        }
    },
    methods:{
        get5(){
            console.log(this.val5)
        },
        get4(){
            console.log(this.val4);
        },
        getval(){
            console.log(this.val2);
        },
        handle(){
            console.log(this.val);
        }
    }
}
</script>
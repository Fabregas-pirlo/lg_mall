<template>
    <div>
        <h1>tab container</h1>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1">
                美食
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                购物
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3">
                休闲
            </mt-tab-container-item>
        </mt-tab-container>
        <button @click="active='tab1'">美食</button>
        <button @click="active='tab2'">购物</button>
        <button @click="active='tab3'">休闲</button>
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
<template>
    <div>
        <h1>tab container</h1>
        <mt-tab-container v-model="active">
            <mt-tab-container-item id="tab1">
                子组件1
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                子组件2
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:"tab2"
        }
    }
}
</script>
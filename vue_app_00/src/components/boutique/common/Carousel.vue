<template>
    <div>
        <mt-swipe :auto="4000"  :show-indicators="false">
                <mt-swipe-item><img :src="firstImage"></mt-swipe-item>
                <mt-swipe-item><img :src="secondImage"></mt-swipe-item>
                <mt-swipe-item><img :src="thirdImage"></mt-swipe-item>
                
                
        </mt-swipe>
    </div>
</template>

<script>
export default {
    props:{
        firstImage:{default:""},
        secondImage:{default:""},
        thirdImage:{default:""}
        
    }
}
</script>

<style scoped>
    .mint-swipe{
        width: 100%;
        height:250px;
    }
    .mint-swipe-item>img{
        width: 100%;
        height:250px;
    }
</style>
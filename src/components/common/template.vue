<template>
    <div class="template">
        <div class="template_model" @click="goDetail"
        :style="`background-image: url('${content.preview}')`">
        </div>
    </div>
</template>
<script>
export default {
    props: ['content'],
    methods: {
        data() {
            return {
                model_id: 300
            }
        },
        goDetail() {
            this.$router.push({
                path: `/details`
                // path: `/details/${this.id}`
            })
        }
    }
}
</script>
<style lang="less" scoped>
.template {
    // border: 3px solid #13d8a7;
    margin-top: 5px;
    margin-left: 12px;
    margin-right: 12px;
    box-shadow: 0 1px 10px rgb(0 0 0 / 15%);
    width: 190px;
    height: 265px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    box-sizing: border-box;
    &:hover {
        border: 3px solid #13d8a7;
        box-sizing: border-box;
        // filter: blur(1px);
        &::after{
        content: '立即预览';
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 50%;
        top: 60%;
        transform: translateX(-50%);
        height: 42px;
        width: 180px;
        display: inline-block;
        background:black;
        line-height: 42px;
        color:white;
        border-radius: 5px;
    }
    }
    &_model {
        width:100%;
        height: 100%;
        background-size: 100% 100%;
    }
    
}
</style>

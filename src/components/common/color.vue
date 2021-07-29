<template>
    <div class="colors">
        <b>主题颜色</b>
        <ul>
            <li @click="changColor(item)" v-for="(item, index) in container" :key="index" :style="`background:${item.color}`">
            </li>
        </ul>
    </div>
</template>
<script>
import '../../assets/css/reset.css'
export default {
    data() {
        return {
            container: [
                {
                    color:'#333333'
                },
                {
                    color:'#284967'
                },
                {
                    color:'#4e7282'
                },
                {
                    color:'#3978a3'
                },
                {
                    color:'#1575bf'
                },
                {
                    color:'#609ef3'
                },
                {
                    color:'#a08f75'
                },
                {
                    color:'linear-gradient(to bottom right,red,#fb0,#00ff26,blue,#fb00ff,#000);'
                }
            ]
        }
    },
    methods: {
        // 切换颜色
        changColor(item) {
            this.$emit('changeColor', item.color)
        }
    }
}
</script>
<style lang="less" scoped>
.colors {
    width: 350px;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgb(0 0 0 / 6%);
    float: right;
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 6px;
    ul {
        li {
            width: 22px;
            height: 22px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 6px;
            margin-top: 3px;
            cursor: pointer;
        }
    }
}
</style>

<template>
    <div class="header">
        <div class="header_container">
            <a href="/"><div class="logo">我是logo</div></a>
            <div class="nav">
                <ul>
                    <li v-for="(item, index) in nav_list" :key="index">
                       <a :href="item.route"><b> {{item.name}} </b></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            nav_list: [
                {
                    name:'首页',
                    route: '/'
                },
                {
                    name:'模板中心',
                    route: '/details'
                },
                {
                    name:'模板商城',
                    route: '/index'
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.header {
    width: 100%;
    height:  66px;
    box-shadow: 0 0 10px rgb(0 0 0 / 60%);
    // position: fixed;
    position: absolute;
    top: 0;
    &_container {
        margin: 0 auto;
        position: relative;
        width: 1200px;
        display: flex;
        justify-content: flex-start;
        .logo {
            width: 155px;
            height: 66px;
            background: black;
            line-height: 66px;
            color: white;
        }
        .nav {
            padding-left: 200px;
            ul {
                li {
                    float: left;
                    font-size: 16px;
                    line-height: 66px;
                    padding: 0 10px;
                    margin-left: 16px;
                    text-shadow: 0 0 3px rgb(0 0 0 / 20%);
                    cursor: pointer;
                    a {
                        color: black;
                    }
                }
            }
        }
    }
}
</style>

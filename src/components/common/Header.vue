<template>
    <div class="header">
        <div class="header_container">
            <a href="/">
                <div class="logo">
                    <img :src="logo"/>
                    <span style="font-weight:bold">在线简历</span>
                </div>
            </a>
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
import logo from './../../assets/image/logo.png'
export default{
    data() {
        return {
            logo,
            nav_list: [
                // {
                //     name:'首页',
                //     route: '/'
                // },
                // {
                //     name:'模板中心',
                //     route: '/details'
                // },
                // {
                //     name:'模板商城',
                //     route: '/index'
                // }
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
            background: pink;
            line-height: 66px;
            color: white;
            position: relative;
            display: flex;
            justify-content:space-between;
            align-items: center;
            padding: 0 10px;
            box-sizing: border-box;
            img {
                width: 55px;
                height: 55px;
            }
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

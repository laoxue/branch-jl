<template>
  <div class="details">
      <Header/>
      <Nav :text="navlist"/>
      <div class="template_container">
        <model @changemodel="changemodel" :data="data" :color="colors"/>
        <color @changeColor="changeColor"/>
        <tools :type="type" :data="data"/>
      </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Nav from '@/components/common/textNav'
import model from './template/100'
import tools from './common/tools'
import color from './common/color'
import '../assets/css/reset.css'
export default {
  name: 'Details',
  props: {
    msg: String
  },
  data() {
      return {
          type:'infos',
          colors: 'rgb(21, 117, 191)',
          data: {
                name: '全民简历',
                brithday: '1995-04',
                phonenumber: '18550087591',
                email: '762452134@qq.com',
                working: '5',
                showAge: true
          },
          navlist: [
              {
                  name: '首页',
                  route: '/',
              },
              {
                  name: '模板中心',
                  route: '/detail',
              }
          ]
      }
  },
  components: {
    Header,
    Nav,
    color,
    // bigTem,
    model,
    tools
  },
  methods: {
    // 切换类型
    changemodel(type) {
      this.type = type;
    },
    // 切换颜色
    changeColor(color) {
      this.colors = color;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.details {
    .template_container {
      width: 1215px;
      margin: 0 auto;
      position: absolute;
      min-height: 50px;
      // display: flex;
      // justify-content: space-between;
      left: 50%;
      transform: translateX(-50%);
      top: 124px;
    }
}
</style>

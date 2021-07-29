<template>
  <div class="index">
      <Header/>
      <div class="template_list">
          <h3 class="template_list_title">高薪简历模板推荐</h3>
          <p class="template_list_subtitle">
            12种颜色任意调配，12种模块自由组合，4种语言可选
          </p>
          <div class="template">
            <Temp v-for="(item, index) in tems" :key="index" :content="item"/>
          </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/common/Header'
import Temp from '@/components/common/template'
export default {
  name: 'Index',
  data() {
    return {
      tems: [
      {
        id:300,
        preview: 'https://img.qmjianli.com/resume/template/online/1016.png'
      },
      {
        id:400,
        preview: 'https://img.qmjianli.com/resume/template/online/1015.png'
      },
      {
        id:500,
        preview: 'https://img.qmjianli.com/resume/template/online/1034.png'
      },
      {
        id:600,
        preview: 'https://img.qmjianli.com/resume/template/online/1030.png'
      },
      {
        id:700,
        preview: 'https://img.qmjianli.com/resume/template/online/1005.png'
      },
      {
        id:800,
        preview: 'https://img.qmjianli.com/resume/template/online/1008.png'
      },
      {
        id:900,
        preview: 'https://img.qmjianli.com/resume/template/online/1002.png'
      },
      {
        id:1000,
        preview: 'https://img.qmjianli.com/resume/template/online/1029.png'
      }
    ]
    }
  },
  props: {
  },
  components: {
    Header,
    Temp
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.index {
  .template_list {
      margin: 0 auto;
      position: relative;
      margin-top: 40px;
      width: 1200px;
      padding: 80px 0;
      top: 10px;
      &_title {
        text-align: center;
        font-size: 36px;
        color: #222;
        line-height: 36px;
        position: relative;
        z-index: 2;
      }
      &_subtitle {
        text-align: center;
        font-size: 16px;
        color: #666;
        margin-top: 20px;
        position: relative;
        z-index: 2;
      }
      .template {
        max-width: 1220px;
        position: relative;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-top: 20px;
      }
  }
}
</style>

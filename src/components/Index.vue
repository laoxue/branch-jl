<template>
  <div class="index">
      <Header/>
      <div class="template_list">
          <h5 class="template_list_title">在线简历编辑</h5>
          <p class="template_list_subtitle">
             （=￣ω￣=）暂时就一个模板对付用吧
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
import { tems } from './../assets/js/tem'  // 模板图片
console.log(tems)
export default {
  name: 'Index',
  data() {
    return {
      tems
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
        text-align: left;
        font-size: 25px;
        color: #222;
        line-height: 25px;
        position: relative;
        z-index: 2; 
        padding-bottom: 10px;
        border-bottom: 3px solid pink;
      }
      &_subtitle {
        text-align: left;
        font-size: 12px;
        color: #666;
        margin-top: 12px;
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

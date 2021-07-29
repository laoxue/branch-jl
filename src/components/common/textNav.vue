<template>
    <div class="text_nav">
        <ul>
            <li v-for="(item, index) in text" :key="index">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    methods: {
    },
    props: ['text'],
    mounted(){
        console.log(this.text)
    }
}
</script>
<style lang="less" scoped>
.text_nav {
      margin: 0 auto;
      position: relative;
      width: 1200px;
      padding-bottom: 10px;
      padding-top: 20px;
      ul {
          li {
              float: left;
              margin-right: 20px;
              cursor: pointer;
          }
      }
    // padding-bottom: 10px;
    // padding-top: 20px;
    // text-align: left;
    // font-size: 14px;
}
</style>

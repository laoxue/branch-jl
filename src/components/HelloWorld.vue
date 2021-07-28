<template>
  <div class="hello">
    <model @changemodel="changemodel"/>
    <tools :type="type"/>
  </div>
</template>

<script>
import model from './template/100'
import tools from './common/tools'
export default {
  name: '',
  props: {
  },
  data() {
    return {
      type:'infos'
    }
  },
  components: {
    model,
    tools
  },
  methods: {
    changemodel(type) {
      this.type = type;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
</style>

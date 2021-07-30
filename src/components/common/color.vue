<template>
  <div class="colors">
    <b>主题颜色</b>
    <ul>
      <li
        @click="changColor(item)"
        v-for="(item, index) in container"
        :key="index"
        :style="`background:${item.color}`"
      ></li>
    </ul>
    <div style="padding-top: 10px">
      <el-button size="small" @click="exportJl()" type="primary"
        >导出简历</el-button
      >
    </div>
  </div>
</template>
<script>
import "../../assets/css/reset.css";
export default {
  data() {
    return {
      container: [
        {
          color: "#333333",
        },
        {
          color: "#284967",
        },
        {
          color: "#4e7282",
        },
        {
          color: "#3978a3",
        },
        {
          color: "#1575bf",
        },
        {
          color: "#609ef3",
        },
        {
          color: "#a08f75",
        },
        {
          color:
            "linear-gradient(to bottom right,red,#fb0,#00ff26,blue,#fb00ff,#000);",
        },
      ],
    };
  },
  methods: {
    // 切换颜色
    changColor(item) {
      this.$emit("changeColor", item.color);
    },
    exportJl() {
      // this.$alert('<span style="cursor:pointer;padding:10px;background:gray;color:white" @click="add">导出PDF</span><span style="padding:10px;background:gray;color:white;margin-left:10px;cursor:pointer">导出Word</span>', '导出类型', {
      //     dangerouslyUseHTMLString: true
      // });

      this.$confirm("请选择导出类型?", "提示", {
        confirmButtonText: "导出PDF",
        cancelButtonText: "导出Word",
        type: "warning",
        center: true,
      })
        .then(() => {
          alert('导出pdf')
        })
        .catch(() => {
          alert('导出Word')
        });
    },
    add() {
      alert(1);
    },
  },
};
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

<template>
  <div class="main">
    <div class="top">
      <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText"
        style="width: 200px"
      >
      </el-input>
    </div>
    <div class="bottom">
      <el-tree
        class="filter-tree"
        :data="data"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        ref="tree"
        style="width: 200px"
        @node-click="show"
      >
      </el-tree>
    </div>
  </div>
</template>

<script>
export default {
  props: ["groups","getDpartmentName"],
  data() {
    return {
      filterText: "",
      data: [
        {
          id: 1,
          label: "创新实验室小组",
          children: [
            {
              id: 2,
              label: Object.keys(this.groups)[0],
              children: [
                {
                  id: 9,
                  label: "开发" + "-" + Object.values(this.groups)[0][0],
                },
                {
                  id: 10,
                  label: "开发" + "-" + Object.values(this.groups)[0][0],
                },
              ],
            },
            {
              id: 3,
              label: Object.keys(this.groups)[1],
              children: [
                {
                  id: 4,
                  label: "网安" + "-" + "text",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    show(a,b,c){
      // console.log(a['label'])
      // console.log(b)
      // console.log(c)
      this.getDpartmentName(a['label'])
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val);
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}
.top {
  width: 300px;
  padding-left: 50px;
  box-sizing: border-box;
  margin-top: 23px;
  margin-bottom: 30px;
}
.bottom {
  width: 300px;
  padding-left: 50px;
  box-sizing: border-box;
}
</style>
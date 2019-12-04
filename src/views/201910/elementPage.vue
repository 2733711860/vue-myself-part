<template>
	<div>
    <el-button @click="show3 = !show3" style="width: 200px;">Click Me</el-button>
    <div style="margin-top: 20px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box" @click="flag = '表格'">表格</div>
          <div class="transition-box" @click="flag = '树图'">树图</div>
          <div class="transition-box" @click="flag = '树图2'">树图2</div>
        </div>
      </el-collapse-transition>
    </div>
    <element-table v-if="flag=='表格'"></element-table>
    <element-tree v-if="flag=='树图'"></element-tree>
    <element-treee v-if="flag=='树图2'"></element-treee>
  </div>
</template>

<script>
	import elementTable from '../../components/element/elementTable.vue'
	import elementTree from '../../components/element/elementTree.vue'
	import elementTreee from '../../components/element/elementTreee.vue'
	export default {
		components: {
			elementTable,elementTree,elementTreee
		},
    data: () => ({
      show3: false,
      flag: ''
    })
  }
</script>

<style scoped="scoped">
	.transition-box {
    margin-bottom: 5px;
    width: 200px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
  }
</style>
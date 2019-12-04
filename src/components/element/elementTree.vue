<template>
	<div>
		<el-input placeholder="输入关键字进行过滤" v-model="filterText">
		</el-input>

		<el-tree
			class="filter-tree"
			:data="data2"
			:props="defaultProps"
			show-checkbox
			accordion
			:filter-node-method="filterNode"
			:render-content="renderContent"
			ref="tree">
		</el-tree>
		<el-button @click="getCheckedNodes">确定</el-button>
	</div>
</template>

<script>
	let id = 1000
	export default {
    watch: {
      filterText(val) { //过滤器
        this.$refs.tree.filter(val);
      }
    },

    methods: {
      filterNode(value, data) { //筛选
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      getCheckedNodes() { // 选择
        console.log(this.$refs.tree.getCheckedNodes(true)); // 返回目前被选中的节点所组成的数组,true表示只返回叶子节点
      },
      renderContent(h, { node, data, store }) { // 自定义节点内容
        return (
          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; padding-right: 8px;">
            <span>
              <span>{node.label}</span>
            </span>
            <span>
              <el-button type="text" on-click={ () => this.append(data) }>添加</el-button>
              <el-button type="text" on-click={ () => this.remove(node, data) }>删除</el-button>
            </span>
          </span>);
      },
      append(data) { // 添加
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      remove(node, data) { //删除
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      }
    },

    data() {
      return {
        filterText: '',
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  }
</script>

<style>

</style>
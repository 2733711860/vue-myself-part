<template>
	<div>
		<el-input
		  placeholder="输入关键字进行过滤"
		  v-model="filterText">
		</el-input>

		<el-tree
		  class="filter-tree"
		  :data="data2"
		  :props="defaultProps"
		  accordion
		  :filter-node-method="filterNode"
		  :render-content="renderContent"
		  @node-click="selOne"
		  ref="tree2">
		</el-tree>

		<el-input
		  v-model="chooseValue">
		</el-input>
	</div>
</template>

<script>
	let id = 1000;
  export default {
    watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
    methods: {
      filterNode(value, data) { // 过滤
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      selOne(chooseItem) { // 选择
      	let hasChildren = chooseItem.children || ''
      	if (hasChildren == '') {
      		this.chooseValue = chooseItem.label
      	}
      },
      append(data) { // 添加
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },
      remove(node, data) { // 删除
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
      renderContent(h, { node, data, store }) { // 自定义节点
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
      }
    },
    data() {
      return {
        filterText: '',
        chooseValue: '',
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
  };
</script>
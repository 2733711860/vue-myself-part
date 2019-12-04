<!--
	树形控件
-->
<template>
	<div>
		<div>
			<!--检索框-->
			<el-input placeholder="搜索部门..." v-model="filterText">
			</el-input>

			<!--树形控件-->
			<el-tree
				key="tree"
				class="filter-tree"
				:accordion="true"
				:data="all_dept"
				:props="defaultProps"
				:default-expand-all="false"
				:filter-node-method="filterNode"
				:highlight-current="true"
				@node-click="handleNodeClick"
				ref="tree">
			</el-tree>

        </div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				filterText:'',//检索关键字
				chooseValue:'',//选择的值
				all_dept:[], //所有数据
				defaultProps:{
					children: 'children',
					label: 'text'
				}
			}
		},
		components: {

		},
		created() {
			this.init(); //初始化
		},
		mounted() {
		},
		methods: {
			//初始化(从json文件中获取数据)
			init() {
				var vm = this;
				vm.$axios.get('static/chooseAddress.json').then(function(res){
					console.log(res)
		        	vm.all_dept = res.data[0].children;
		        }).catch(function(err){
		        	console.log("errerrerrerr:"+err)
		        });
			},

			//根据检索值过滤数据
			filterNode(value, data) {
			    if (!value) return true;
			    return data.text.indexOf(value) !== -1;
		    },

		    //选择数据
		    handleNodeClick(data){
		    	console.log(data)
		    	this.chooseValue = data.text;
		    },
		},
		watch: { //监听检索值得改变
			filterText(val) {
				this.$refs.tree.filter(val);
			}
		}
	}
</script>

<style>
</style>
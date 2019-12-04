<!--
	拖拽移动
	npm install vuedraggable
	import draggable from 'vuedraggable'
-->
<template>
	<div>
		<drag-move :dataList='dataList'></drag-move>
		<div style="height: 100px;"></div>
		<drag-move-two :dataListTwo='dataListTwo' :thList='thList'></drag-move-two>
		<div style="height: 100px;"></div>
	</div>
</template>

<script>
	import dragMove from '../../components/dragMove/dragMove.vue'
	import dragMoveTwo from '../../components/dragMove/dragMoveTwo.vue'
	export default {
		components:{
			dragMove,dragMoveTwo,
		},
		data(){
			return{
				dataList:[
					"隋",
					"唐",
					"宋",
					"元",
					"明",
					"清"
				],
				dataListTwo: [
			        { id: 1, name: "艾比", sport: "篮球" },
			        { id: 2, name: "布鲁克", sport: "足球" },
			        { id: 3, name: "考特尼", sport: "乒乓球" },
			        { id: 4, name: "大卫", sport: "橄榄球" }
			    ],
			    thList:[
			    	'ID','名称','运动'
			    ],
			}
		}
	}
</script>

<style scoped="scoped">
</style>
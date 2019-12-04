<template>
	<div style="display: flex;flex-flow: column;justify-content: center;align-items: center;padding: 20px;">
		<!--组件一-->
		<div style="display: flex;flex-flow: column;align-items: center;height: 200px;background-color: paleturquoise;width: 100%;">
			<h3>我是组件一</h3>
			<partCommunication01></partCommunication01>
		</div>
		<!--组件二-->
		<div style="display: flex;flex-flow: column;align-items: center;height: 200px;background-color: lightblue;width: 100%;">
			<h3>我是组件二</h3>
			<partCommunication02></partCommunication02>
		</div>
	</div>
</template>

<script>
	import partCommunication01 from '../components/partCommunication/partCommunication01.vue'
	import partCommunication02 from '../components/partCommunication/partCommunication02.vue'
	export default{
		data(){
			return{}
		},
		components:{
			partCommunication01,
			partCommunication02
		}
	}
</script>

<style>
</style>
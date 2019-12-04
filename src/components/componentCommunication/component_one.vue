<!--
	组件一
-->
<template>
	<div>
		<div>
			<span>组件一本来值：</span>
			<span>{{one_origin}}</span>
			<el-button @click="goParent">传值给父组件</el-button>
		</div>
		<div style="height: 30px;"></div>
		<div>
			<span>组件一获取父组件本来值：</span>
			<span>{{one_getData}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				one_origin:"组件一源值",
			}
		},
		props:{
			one_getData:""
		},
		methods:{
			goParent(){
				this.$emit('getChildOne',this.one_origin);
			}
		}
	}
</script>

<style>
</style>
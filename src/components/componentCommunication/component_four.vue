<!--
	组件四
-->
<template>
	<div>
		<span>来自父组件的值：{{fromChild}}</span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				fromChild:'',
			}
		},
		methods:{
			getMsgFromChild(data){
				this.fromChild = data;
			}
		}
	}
</script>

<style>
</style>
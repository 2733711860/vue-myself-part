<!--
	加载动画
-->
<template>
	<div>
		<el-button @click="jiazai">加载</el-button>
	</div>
</template>

<script>
	export default{
		components:{
		},
		methods:{
			jiazai(){
				this.$store.dispatch('show');
				let that = this;
				setTimeout(function(){
					that.$store.dispatch('close');
				},3000)
			}
		}
	}
</script>

<style>
</style>
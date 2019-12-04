<!--
	子组件二
-->
<template>
	<div>
		<div>
			<span>组件二的本来值：</span>
			<span>{{two_origin}}</span>
			<el-button @click="goComponentThree">传值给子组件三</el-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				two_origin:"组件二源值",
			}
		},
		methods:{
			goComponentThree(){
				//将组件二的本来值two_origin存入vuex
				this.$store.dispatch("actionTwo_origin",this.two_origin); //异步
//				this.$store.commit("changeTwo_origin",this.two_origin); //同步
			}
		}
	}
</script>

<style>
</style>
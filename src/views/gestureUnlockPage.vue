<!--
	手势解锁页面
-->
<template>
	<div>
		<el-button @click="showClicked">手势密码</el-button>
		<gestureUnlock v-model="showPwd"></gestureUnlock>
	</div>
</template>

<script>
	import gestureUnlock from '../components/gestureUnlock/gestureUnlock.vue'
	export default{
		data(){
			return{
				showPwd:false
			}
		},
		components:{
			gestureUnlock,
		},
		methods:{
			showClicked(){
				this.showPwd = true;
			}
		}
	}
</script>

<style>
</style>
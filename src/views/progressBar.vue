<template>
	<div>
		<progress-Bar></progress-Bar>
		<div style="height: 100px;"></div>
		<mobileScol></mobileScol>
	</div>
</template>

<script>
	import progressBar from '../components/progress/progress.vue'
	import mobileScol from '../components/mobileScol/mobileScol.vue'
	export default{
		components:{
			progressBar,mobileScol
		}
	}
</script>

<style>
</style>
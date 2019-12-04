<!--
	图片预览
-->
<template>
	<div>
		<div v-for='(xx,index) in picUrlList' style="width: 200px;height: 200px;">
			<img :preview='index' :src="xx.picUrl" style="max-width: 100%;max-height: 200px;" />
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				picUrlList:[
					{picUrl:'../../../static/imgs/1.jpg'},
					{picUrl:'../../../static/imgs/2.jpg'},
					{picUrl:'../../../static/imgs/3.jpg'},
					{picUrl:'../../../static/imgs/4.jpg'}
				]
			}
		},
		mounted(){
			this.$previewRefresh(); //刷新，防止预览失效
		}
	}
</script>

<style>
</style>
<!--
	图片预览
-->
<template>
	<div style="display: flex;justify-content: center;align-items: center;">
		<div id="goodcover" @click="closeDeletePopup"></div>
		
		<!--删除提示框-->
		<div id="code" class="codeClass">
			<div style="width: 100%;height: 100%;">
				<img :src="imgUrl" width="100%" height="100%" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			filePre:''
		},
		data(){
			return{
				filedata:'',
				imgUrl:''
			}
		},
		mounted(){
		},
		methods:{
			showDeletePopup() {
				let that = this;
				setTimeout(function(){
					that.filedata = that.filePre;
					that.imgUrl = that.filedata.url;
					console.log(that.filedata)
				},50)
				
		        $('#goodcover').show();
		        $('#code').fadeIn();
			},
			closeDeletePopup(){
				$('#code').hide();
        		$('#goodcover').hide();
			},
		}
	}
</script>

<style scoped="scoped">
	#goodcover {
		display: none;
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 100%;
		background-color: black;
		z-index: 1001;
		-moz-opacity: 0.8;
		opacity: 0.50;
		filter: alpha(opacity=80);
	}
	
	.codeClass {
		width: 80%;
		height: 34%;
		background-color: #fff;
		position: absolute;
		display: none;
		z-index: 1002;
		border-radius: 8px;
		text-align: center;
		top: 33%;
	}
</style>
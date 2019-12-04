<template>
	<div style="display: flex;justify-content: center;align-items: center;">
		<div id="goodcover"></div>
		
		<!--删除提示框-->
		<div id="code" class="codeClass">
			<div style="padding: 14px 0;font-weight: bold;">提示</div>
			<div style="padding-bottom: 12px;border-bottom: 1px solid #DCDCDC;">确认删除？</div>
			<div style="display: flex;flex-flow: row;">
				<div style="border-right: 1px solid #DCDCDC;padding: 12px 0;width: 50%;" @click="closeDeletePopup">取消</div>
				<div style="padding: 12px 0;width: 50%;">确认</div>
			</div>
		</div>
		
		<!--警告提示框-->
		<div id="code1" class="codeClass">
			<div style="padding: 14px 0;font-weight: bold;">提示</div>
			<div style="padding-bottom: 12px;border-bottom: 1px solid #DCDCDC;">{{message}}</div>
			<div style="display: flex;flex-flow: row;">
				<div style="padding: 12px 0;width: 100%;" @click="closeAlertPopup">确认</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				message:""
			}
		},
		components: {},
		created() {},
		methods: {
			//删除提示框打开及关闭
			showDeletePopup() {
		        $('#goodcover').show();
		        $('#code').fadeIn();
			},
			closeDeletePopup(){
				$('#code').hide();
        		$('#goodcover').hide();
			},
			
			//警告提示框打开及关闭
			showAlertPopup(msg){
				this.message = msg;
				$('#goodcover').show();
				$('#code1').fadeIn();
			},
			closeAlertPopup(){
				$('#goodcover').hide();
				$('#code1').hide();
			}
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
		width: 60%;
		background-color: #fff;
		position: absolute;
		display: none;
		z-index: 1002;
		border-radius: 8px;
		text-align: center;
		margin-top: 50%;
	}
</style>
<template>
	<div>
		<button class="popup_button" @click="showPopup">弹出</button>

		<div id="goodcover"></div>
		<div id="code">
			<div class="close1">
				<img src="../../../static/close.gif" style="width: 25px;height: 35px;" @click="close">
			</div>
			<div class="goodtxt">
				<p>微信扫一扫</p>
				<p>将您的团购分享到朋友圈</p>
				<p>让更多朋友知道哦~</p>
			</div>
			<div class="code-img"> <img id="ewmsrc" src="../../../static/code.jpg"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		components: {},
		created() {},
		methods: {
			showPopup() {
		        $('#goodcover').show();
		        $('#code').fadeIn();
			},
			close(){
				$('#code').hide();
        		$('#goodcover').hide();
			}
		}
	}
</script>

<style scoped="scoped">
	.popup_button {
		width: 200px;
		height: 35px;
		outline: none;
		border: none;
		background: rgba(255, 255, 255, 0.4);
	}
	
	#goodcover {
		display: none;
		position: absolute;
		top: 0%;
		left: 0%;
		width: 100%;
		height: 133%;
		background-color: black;
		z-index: 1001;
		-moz-opacity: 0.8;
		opacity: 0.50;
		filter: alpha(opacity=80);
	}
	
	#code {
		width: 300px;
		height: 500px;
		background-color: #fff;
		padding: 10px;
		position: absolute;
		display: none;
		left: 42%;
		top: 20%;
		z-index: 1002;
	}
	
	.close1 {
		width: 300px;
		height: 60px;
		display: flex;
		justify-content: flex-end;
	}
	
	
	.goodtxt {
		text-align: center;
	}
	
	.goodtxt p {
		height: 30px;
		line-height: 30px;
		font-size: 16px;
		color: #000;
		font-weight: 600;
	}
	
	.code-img {
		width: 250px;
		margin: 30px auto 0 auto;
		padding: 10px;
	}
	
	.code-img img {
		width: 240px;
	}
</style>
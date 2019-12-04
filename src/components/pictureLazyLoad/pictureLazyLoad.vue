<!--
	图片懒加载组件
-->
<template>
	<div>
		<div style="height: 250px;width: 200px;display: flex;justify-content: center;align-items: center;">
			<img :src="imgUrl" style="width: 100%;height: 100%;" />
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgUrl:"http://www.86y.org/images/loading.gif", //图片加载动画
			}
		},
		mounted(){
			var newImg = new Image();
			newImg.src = this.imgUrl;
			newImg.onerror = () => {
				newImg.src = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489486509807&di=22213343ba71ad6436b561b5df999ff7&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F77%2F31%2F20300542906611142174319458811.jpg";
			};
			newImg.onload = () => {
				this.imgUrl = "../../../static/imgs/3.jpg";
			}
		},
	}
</script>

<style scoped="scoped">
</style>
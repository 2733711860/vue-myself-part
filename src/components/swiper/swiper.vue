<!--
	需要引入style.css文件
-->
<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide swiper-slide-center none-effect">
					<img src="../../../static/imgs/banner001.jpg">
				</div>
				<div class="swiper-slide">
					<img src="../../../static/imgs/banner002.jpg">
				</div>
				<div class="swiper-slide">
					<img src="../../../static/imgs/banner003.jpg">
				</div>
				<div class="swiper-slide">
					<img src="../../../static/imgs/banner004.jpg">
				</div>
				<div class="swiper-slide">
					<img src="../../../static/imgs/banner005.jpg">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	export default {
		data() {
			return {
			}
		},
		mounted(){
			var swiper = new Swiper('.swiper-container',{
				autoplay: true,
				speed: 3000,
				initialSlide :2,              // 初始化跳到第几个轮播图
				loop: true,
				centeredSlides: true,
				slidesPerView: 2,
				pagination: '.swiper-pagination',
				paginationClickable: true,
				onInit: function(swiper) {
					swiper.slides[2].className = "swiper-slide swiper-slide-active";
				},
				breakpoints: {
					668: {
						slidesPerView: 1,
					}
				}
			});
		}
	}
</script>

<style scoped="scoped">
	@import "../../css/style.css";
</style>
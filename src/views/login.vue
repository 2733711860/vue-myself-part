<template lang="html">
	<div class="loginForm" style="width: 100%;height: 100%;">
		<!-- 文字区不需要请连css部分代码一并删除 -->
		<!--<h1><small>全屏</small>自动切换背景<small>适用浏览器：360、FireFox、Chrome、Opera、傲游、搜狗、世界之窗. 不支持Safari、IE8及以下浏览器。</small></h1>-->
		<div class="dengluForm">
			<div style="text-align: center;margin-bottom: 0.1rem;font-size: 22PX;">用户登录</div>
			<div class="loginForm_username">
				<div style="width: 60PX;font-size: 18PX;">用户名</div>
				<div class="loginForm_username_right">
					<input class="loginForm_username_input" type="text" />
				</div>
			</div>
			<div class="loginForm_username">
				<div style="width: 60PX;font-size: 18PX;">密码</div>
				<div class="loginForm_username_right">
					<input class="loginForm_username_input" type="text" />
				</div>
			</div>
			<button class="close" @click="login()" style="height: 35PX;margin-top: 20PX;">登录</button>
			<!--<el-button type="primary" @click="login()" style="height: 35PX;margin-top: 20PX;" >登录</el-button>-->
		</div>
		
		
		<!-- 你可以添加个多“.slideshow-image”项目, 记得修改CSS -->
		<div class="slideshow">
			<div class="slideshow-image" style="background-image: url(../../static/imgs/1.jpg)"></div>
			<div class="slideshow-image" style="background-image: url(../../static/imgs/2.jpg)"></div>
			<div class="slideshow-image" style="background-image: url(../../static/imgs/3.jpg)"></div>
			<div class="slideshow-image" style="background-image: url(../../static/imgs/4.jpg)"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiperOption: {
		          spaceBetween: 30,
		          effect: 'fade',
		          slidesPerView: 'auto',
		          pagination: {
		            el: '.swiper-pagination',
		            clickable: true
		          },
		          autoplay: {
		            delay: 4000,
		            disableOnInteraction: false
		          },
		        }
			}
		},
		components: {
		},
		mounted() {
		},
		methods: {
			login() {
				this.$router.push({
					name:'HelloWorld'
				})
			}
		},
	}
</script>

<style lang="scss">

</style>
<style scoped="scoped">
*{margin:0;padding:0;}

.slideshow {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.slideshow-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: no-repeat 50% 50%;
  background-size: cover;
  -webkit-animation-name: kenburns; /*为动画命名*/
          animation-name: kenburns;
  -webkit-animation-timing-function: linear; /*从开头到结尾以相同的速度来播放动画*/
          animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite; /*规定动画应该无限次播放*/
          animation-iteration-count: infinite;
  -webkit-animation-duration: 12s; /*动画完成一个周期所需要的时间*/
          animation-duration: 12s;
  opacity: 1;
  -webkit-transform: scale(1.2); /*缩放函数*/
          transform: scale(1.2);
}
.slideshow-image:nth-child(1) {
  -webkit-animation-name: kenburns-1;
          animation-name: kenburns-1;
  z-index: 3;
}
.slideshow-image:nth-child(2) {
  -webkit-animation-name: kenburns-2;
          animation-name: kenburns-2;
  z-index: 2;
}
.slideshow-image:nth-child(3) {
  -webkit-animation-name: kenburns-3;
          animation-name: kenburns-3;
  z-index: 1;
}
.slideshow-image:nth-child(4) {
  -webkit-animation-name: kenburns-4;
          animation-name: kenburns-4;
  z-index: 0;
}

@-webkit-keyframes kenburns-1 {
  0% {
    opacity: 1;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  1.5625% {
    opacity: 1;
  }
  23.4375% {
    opacity: 1;
  }
  26.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  98.4375% {
    opacity: 0;
    -webkit-transform: scale(1.21176);
            transform: scale(1.21176);
  }
  100% {
    opacity: 1;
  }
}

@keyframes kenburns-1 {
  0% {
    opacity: 1;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  1.5625% {
    opacity: 1;
  }
  23.4375% {
    opacity: 1;
  }
  26.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  98.4375% {
    opacity: 0;
    -webkit-transform: scale(1.21176);
            transform: scale(1.21176);
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes kenburns-2 {
  23.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  26.5625% {
    opacity: 1;
  }
  48.4375% {
    opacity: 1;
  }
  51.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
}
@keyframes kenburns-2 {
  23.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  26.5625% {
    opacity: 1;
  }
  48.4375% {
    opacity: 1;
  }
  51.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
}
@-webkit-keyframes kenburns-3 {
  48.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  51.5625% {
    opacity: 1;
  }
  73.4375% {
    opacity: 1;
  }
  76.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
}
@keyframes kenburns-3 {
  48.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  51.5625% {
    opacity: 1;
  }
  73.4375% {
    opacity: 1;
  }
  76.5625% {
    opacity: 0;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
}
@-webkit-keyframes kenburns-4 {
  73.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  76.5625% {
    opacity: 1;
  }
  98.4375% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes kenburns-4 {
  73.4375% {
    opacity: 1;
    -webkit-transform: scale(1.2);
            transform: scale(1.2);
  }
  76.5625% {
    opacity: 1;
  }
  98.4375% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

.dengluForm{
	padding: 0.4rem;
	display: flex;
	flex-flow: column;
	color: whitesmoke;
	position: absolute;
	top: 50%;
	left: 50%;
	z-index: 99;
	-webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
    background-color: rgba(170, 170, 170, 0.3);
    box-shadow: 0 1em 2em -1em rgba(0, 0, 0, 0.5);
}
h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
  z-index: 99;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 1em 2em -1em rgba(0, 0, 0, 0.5);
  padding: 1em 2em;
  line-height: 1.5;
}
h1 small {
  display: block;
  font-size: .7em;
}
h1 small:first-child {
  border-bottom: 1PX solid rgba(0, 0, 0, 0.25);
  padding-bottom: .5em;
}
h1 small:last-child {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  padding-top: .5em;
}

.loginForm_username{
	margin-top: 30PX;
	display: flex;
	margin-bottom: 10PX;
}
.loginForm_username_right{
	flex: 1;
}
.loginForm_username_input{
	font-size: 16px;
	padding: 5px 0;
	background-color: rgba(255,255,255,0);
	outline: none;
	border: none;
	border-bottom: 1px solid green;
	padding-left: 0.1rem;
	color: white;
}
/*按钮动画*/
.close:hover,
.close:focus {
  box-shadow: inset -9em 0 0 0 var(--hover), inset 9em 0 0 0 var(--hover);
}
.close {
  --color: #8fc866;
  --hover: #66c887;
}
button {
  color: var(--color);
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
button:hover, button:focus {
  border-color: var(--hover);
  color: #fff;
}
button {
  background: none;
  border: 1px solid;
  font-size: 16px;
  line-height: 1;
}
</style>
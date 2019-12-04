<template>
	<div style="font-size: .2rem;">
		<div class="md-modal md-effect-1" id="modalid">
			<div class="md-content">
				<div class="md-content-title">{{title}}</div>
				<div class="md-content-content">{{contentMsg}}</div>
				<div class="md-content-oneBtn" @click="ensure">{{btnName}}</div>
			</div>
		</div>
		<div class="md-overlay" @click="closeDiv()"></div>
	</div>
</template>

<script>
export default {
	data () {
		return{
			title: '提示',
			contentMsg: '',
			btnName: '确定',
			confirm: ''
		}
	},
	mounted () {
	},
	methods: {
		openDiv() {
			window.utils.classie.add(document.getElementById('modalid'), 'md-show')
		},
		closeDiv() {
			window.utils.classie.remove(document.getElementById('modalid'), 'md-show')
		},
		ensure() {
			this.closeDiv()
			if (this.confirm != '') {
				console.log(1111111)
				this.confirm()
			}
		}
	}
}
</script>

<style scoped="scoped">
.md-modal {
	position: fixed;
	top: 50%;
	left: 50%;
	width: 50%;
	max-width: 630px;
	min-width: 320px;
	height: auto;
	z-index: 2000;
	visibility: hidden;
	-webkit-backface-visibility: hidden;
	-moz-backface-visibility: hidden;
	backface-visibility: hidden;
	-webkit-transform: translateX(-50%) translateY(-50%);
	-moz-transform: translateX(-50%) translateY(-50%);
	-ms-transform: translateX(-50%) translateY(-50%);
	transform: translateX(-50%) translateY(-50%);
}
.md-show {
	visibility: visible;
}
.md-overlay {
	position: fixed;
	width: 100%;
	height: 100%;
	visibility: hidden;
	top: 0;
	left: 0;
	z-index: 1000;
	opacity: 0;
	background: rgb(51, 51, 51);
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}

.md-show ~ .md-overlay {
	opacity: 1;
	visibility: visible;
}

.md-content {
	background: #FFFFFF;
	position: relative;
	border-radius: .1rem;
	margin: 0 auto;
}
.md-effect-1 .md-content {
	-webkit-transform: scale(0.7);
	-moz-transform: scale(0.7);
	-ms-transform: scale(0.7);
	transform: scale(0.7);
	opacity: 0;
	-webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	transition: all 0.3s;
}
.md-show.md-effect-1 .md-content {
	-webkit-transform: scale(1);
	-moz-transform: scale(1);
	-ms-transform: scale(1);
	transform: scale(1);
	opacity: 1;
}
.md-content-title{
	font-weight: bold;
	padding: .15rem 0;
	text-align: center;
	border-bottom: 1px solid #DFDFDF;
}
.md-content-content{
	padding: .1rem;
	min-height: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.md-content-oneBtn{
	padding: .15rem 0;
	text-align: center;
	border-top: 1px solid #DFDFDF;
}
@-webkit-keyframes slit {
	50% { -webkit-transform: translateZ(-250px) rotateY(89deg); opacity: .5; -webkit-animation-timing-function: ease-out;}
	100% { -webkit-transform: translateZ(0) rotateY(0deg); opacity: 1; }
}
@-moz-keyframes slit {
	50% { -moz-transform: translateZ(-250px) rotateY(89deg); opacity: .5; -moz-animation-timing-function: ease-out;}
	100% { -moz-transform: translateZ(0) rotateY(0deg); opacity: 1; }
}
@keyframes slit {
	50% { transform: translateZ(-250px) rotateY(89deg); opacity: 1; animation-timing-function: ease-in;}
	100% { transform: translateZ(0) rotateY(0deg); opacity: 1; }
}
@-webkit-keyframes rotateRightSideFirst {
	50% { -webkit-transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; }
	100% { -webkit-transform: translateZ(-200px); }
}
@-moz-keyframes rotateRightSideFirst {
	50% { -moz-transform: translateZ(-50px) rotateY(5deg); -moz-animation-timing-function: ease-out; }
	100% { -moz-transform: translateZ(-200px); }
}
@keyframes rotateRightSideFirst {
	50% { transform: translateZ(-50px) rotateY(5deg); animation-timing-function: ease-out; }
	100% { transform: translateZ(-200px); }
}
@-webkit-keyframes OpenTop {
	50% {
		-webkit-transform: rotateX(10deg);
		-webkit-animation-timing-function: ease-out;
	}
}
@-moz-keyframes OpenTop {
	50% {
		-moz-transform: rotateX(10deg);
		-moz-animation-timing-function: ease-out;
	}
}
@keyframes OpenTop {
	50% {
		transform: rotateX(10deg);
		animation-timing-function: ease-out;
	}
}
@media screen and (max-width: 32em) {
	body { font-size: 75%; }
}
</style>
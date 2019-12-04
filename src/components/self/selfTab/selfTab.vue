<template>
	<div style="font-size: 0.15rem;background-color: #f3f3f3;height: 100%;">
		<div class="container page-swiper-panel" id="page-swiper-panel">
			<ul class="kinerNav">
				<li class="active">选项卡1</li>
				<li>选项卡2</li>
				<li>选项卡3</li>
				<li>选项卡4</li>
				<li>选项卡5</li>
			</ul>
			<div class="box">
				<div class="kinerContent">
					<div class="wrapper">
						<div class="kinerItem">
							<div data-slideTo="1">面板1,点击跳转至【面板2】</div>
							<div class="eventPanel">

							</div>
						</div>
						<div class="kinerItem">
							<div class="eventPanel">

							</div>
						</div>
						<div class="kinerItem">
							<div class="eventPanel">

							</div>
						</div>
						<div class="kinerItem">
							<div class="eventPanel">

							</div>
						</div>
						<div class="kinerItem">
							<div class="eventPanel">

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	}
}
</script>

<style scoped="scoped">
	/*  网站主色  */
	.kinerNav {
		width: 100%;
		height: .5rem;
		line-height: .5rem;
		background-color: #ffffff;
		display: table;
		padding: 0;
		position: relative;
	}
	.realBorder {
		display: block;
		width: 0;
		height: .08rem;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: #32c1d4;
	}
	.kinerNav>li {
		display: table-cell;
		text-align: center;
		font-size: 0.15rem;
		font-weight: bolder;
		-webkit-transition: color 300ms;
		-moz-transition: color 300ms;
		-ms-transition: color 300ms;
		-o-transition: color 300ms;
		transition: color 300ms;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
	.kinerNav>li.active {
		color: #32c1d4;
	}
	.kinerContent {
		display: block;
		height: 100%;
	}
	.kinerContent .wrapper {
		height: 100%;
	}
</style>
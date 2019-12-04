<template>
	<div>
		<el-tabs tab-position="bottom" style="height: 40px;">
		    <el-tab-pane label="用户管理"></el-tab-pane>
		    <el-tab-pane label="配置管理"></el-tab-pane>
		    <el-tab-pane label="角色管理"></el-tab-pane>
		    <el-tab-pane label="定时任务"></el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		mounted() {
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.el-tabs--bottom .el-tabs__header.is-bottom{
		margin: 0;
	}
	.el-tabs__nav-wrap.is-scrollable{
		padding: 0;
	}
	.el-tabs__nav-prev{
		display: none;
	}
	.el-tabs__nav-next{
		display: none;
	}
	.el-tabs__item{
		padding: 0;
		width: 25%;
		text-align: center;
	}
	.el-tabs__nav{
		width: 100%;
	}
	.el-tabs__active-bar{
		width: 25% !important;
	}
	.el-tabs__active-bar{
		top: 0;
	}
	.is-bottom{
		padding: 0;
		margin: 0;
	}
</style>
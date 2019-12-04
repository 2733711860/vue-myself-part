<!--
	加载动画
-->
<template>
	<div class="pageBody" v-show="getLoading==true">
		<div class="container">
			<span class="girl"></span>
			<div class="boys">
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<div id="goodcover"></div>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default{
		computed:{
			getLoading: {
				//获取vuex里面的值
				get: function() {
					console.log(1111111)
					return this.$store.state.getLoading;
				},
				set: function() {
				}
			}
		}
	}
</script>

<style scoped="scoped">
	@import "../../css/loading.css";
</style>
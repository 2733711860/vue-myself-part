<!--
	子组件三
-->
<template>
	<div>
		<div>
			<span>获取组件二的本来值：</span>
			<span>{{three_getData}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		computed:{
//			three_getData: {
//				get: function(){
//					//获取vuex里面的值
//					return this.$store.state.two_origin;
//				},
//				set: function(){
//				}
//			},
			three_getData(){
				//获取vuex里面的值
				return this.$store.state.two_origin;
			}
		}
	}
</script>

<style>
</style>
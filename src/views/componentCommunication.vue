<template>
	<div>
		<div>组件一</div>
		<component_one :one_getData="parent_origin" @getChildOne="getChildData"></component_one>
		<div style="height: 100px;"></div>
		
		<div>父组件</div>
		<div>
			<span>父组件本来值：</span>
			<span>{{parent_origin}}</span>
		</div>
		<div style="margin-top: 30px;">
			<span>父组件获取组件一本来值：</span>
			<span>{{parent_getData}}</span>
		</div>
		
		<div style="height: 100px;"></div>
		<div>组件二</div>
		<component_two></component_two>
		
		<div style="height: 100px;"></div>
		<div>组件三</div>
		<component_three></component_three>
		<div style="height: 150px;"></div>
		
		<!--ref实现通信-->
		<div style="height: 40px;line-height: 40px;font-size: 18px;">ref实现通信</div>
		<component_four ref="msg"></component_four>
		<div style="height: 100px;"></div>
	</div>
</template>

<script>
	import component_one from '../components/componentCommunication/component_one.vue'
	import component_two from '../components/componentCommunication/component_two.vue'
	import component_three from '../components/componentCommunication/component_three.vue'
	import component_four from '../components/componentCommunication/component_four.vue'
	export default{
		data(){
			return{
				parent_origin:"父组件源值",
				parent_getData:"",
			}
		},
		components:{
			component_one,
			component_two,
			component_three,
			component_four
		},
		mounted(){
			console.log(this.$refs)
			this.$refs.msg.getMsgFromChild("我来自父组件！");
		},
		methods:{
			getChildData(data){
				this.parent_getData = data;
			}
		}
	}
</script>

<style>
</style>
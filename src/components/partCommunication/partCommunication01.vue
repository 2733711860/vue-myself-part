<!--
	组件传值：组件一
-->
<template>
	<div>
		<myself_input :name="name01" v-on:change="change" v-model="zujian1"></myself_input>
	</div>
</template>

<script>
	import myself_input from '../input/myself_input.vue'
	export default{
		data(){
			return{
				name01:'姓名',
				fromInputValue:'',
				zujian1:''
			}
		},
		components:{
			myself_input,
		},
		methods:{
			//由myself_input组件向子组件一传值
			change(data){
				this.zujian1 = data;
				console.log("来自子组件输入框的值:"+this.zujian1)
				
				//把组件一的值存入vuex
				this.$store.dispatch('partCommunicationData_action',this.zujian1);
			}
		}
	}
</script>

<style>
</style>
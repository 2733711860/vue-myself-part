<!--
	组件传值：组件二
-->
<template>
	<div>
		<myself_input03 :name="name02" @change="change2" v-model="zujian2"></myself_input03>
		<el-button @click="getZuJian1">获取组件一的值</el-button><br/>
		{{zujiandata}}
	</div>
</template>

<script>
	import myself_input03 from '../input/myself_input03.vue'
	export default{
		data(){
			return{
				name02:'书籍',
				zujian2:'',
				zujiandata:'',
			}
		},
		components:{
			myself_input03,
		},
		methods:{
			change2(data){
				this.zujian2 = data;
				console.log("来自子组件输入框的值："+this.zujian2)
			},
			getZuJian1(){
				this.zujiandata = this.$store.state.partCommunicationData;
			}
		}
	}
</script>

<style>
</style>
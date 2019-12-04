<!--
	文件上传
-->
<template>
	<div>
		<el-button @click="changeflag('1')">文件上传一</el-button>
		<el-button @click="changeflag('2')">文件上传二</el-button>
		
		<div style="height: 100px;"></div>
		
		<uploadOne v-show="flag=='1'"></uploadOne>
		<uploadTwo v-show="flag=='2'"></uploadTwo>
	</div>
</template>
<script>
	import uploadOne from '../components/upload/uploadOne.vue'
	import uploadTwo from '../components/upload/uploadTwo.vue'
	export default {
		data(){
			return{
				flag:'1'
			}
		},
		components:{
			uploadOne,uploadTwo,
		},
		methods:{
			changeflag(mm){
				this.flag = mm;
			}
		}
	}
</script>
<!--
	文件上传
-->
<template>
	<div>
		<el-upload class="upload-demo" 
			ref="upload"
			action="https://jsonplaceholder.typicode.com/posts/" 
			:on-preview="handlePreview" 
			:on-remove="handleRemove" 
			:file-list="fileList2" 
			list-type="picture"
			:auto-upload="false"
			:multiple='true'
			:limit='3'
			:on-exceed="limitNum"
			:show-file-list="true"
			:on-success='uploadSuccess'
			:on-error='uploadError'
		>
			<el-button size="small" type="primary">选择文件</el-button>
		</el-upload>
		
		<el-button @click="submitUpload">上传</el-button>
		<el-button @click="clearAll">清空</el-button>
		
		<picturePre ref="picPre" :filePre='filePre'></picturePre>
	</div>
</template>
<script>
	import picturePre from '../upload/picturePre.vue'
	export default {
		data() {
			return {
				fileList2: [],
				filePre:''
			};
		},
		components:{
			picturePre,
		},
		methods: {
			//移除单个文件
			handleRemove(file, fileList) {
			},
			//点击列表图片
			handlePreview(file) {
				this.filePre = file;
				this.$refs.picPre.showDeletePopup();
			},
			//上传文件个数超出限制时触发
			limitNum(files, fileList){
			},
			//上传文件
			submitUpload(){
				this.$refs.upload.submit();
			},
			//清空所有文件
			clearAll(){
				this.$refs.upload.clearFiles();
			},
			//上传失败触发
			uploadError(){
				console.log("上传失败");
			},
			//上传成功触发
			uploadSuccess(){
				console.log("上传成功");
			}
		}
	}
</script>
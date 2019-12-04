<template>
	<div>
		<el-upload 
			ref="upload"
			action="https://jsonplaceholder.typicode.com/posts/" 
			list-type="picture-card" 
			:on-preview="handlePictureCardPreview" 
			:on-remove="handleRemove"
			:auto-upload="false"
		>
			<i class="el-icon-plus"></i>
		</el-upload>
		<el-dialog :visible.sync="dialogVisible" size="tiny">
			<img width="100%" :src="dialogImageUrl" alt="">
		</el-dialog>
		<el-button @click='submitUpload'>上传</el-button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false
			};
		},
		methods: {
			//移除单个文件
			handleRemove(file, fileList) {
				console.log(file, fileList);
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url;
				this.dialogVisible = true;
			},
			//上传文件
			submitUpload(){
				this.$refs.upload.submit();
			},
		}
	}
</script>

<style>

</style>
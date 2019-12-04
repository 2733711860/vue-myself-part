<!--
	上传图片与图片预览(照片预览viewer插件)
-->
<template>
	<div style="display: flex;flex-flow: column;align-items: center;">
		<input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none">
		<el-button style="width: 200px;" @click="fileClick">上传图片</el-button>
		<div>选中{{imgList.length}}张文件，共{{bytesToSize(this.size)}}</div>
		<div class="upload_warp_img" v-show="imgList.length!=0">
			<div class="upload_warp_img_div" v-for="(item,index) of imgList">
				<div class="upload_warp_img_div_top">
					<div class="upload_warp_img_div_text">
						{{item.file.name}}
					</div>
					<img src="../../../static/imgs/del.png" class="upload_warp_img_div_del" @click="fileDel(index)">
				</div>
				<viewer :images="imgList">
					<img :src="item.file.src" navbar="false" toolbar="false">
				</viewer>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgList: [],
				size: 0
			}
		},
		methods:{
			fileClick() {
				document.getElementById('upload_file').click()
			},
			fileChange(el) {
				if(!el.target.files[0].size) return;
				this.fileList(el.target.files);
				el.target.value = ''
			},
			fileList(files) {
				for(let i = 0; i < files.length; i++) {
					this.fileAdd(files[i]);
				}
			},
			fileAdd(file) {
				this.size = this.size + file.size; //总大小
				let reader = new FileReader();
				reader.vue = this;
				reader.readAsDataURL(file);
				reader.onload = function() {
					file.src = this.result;
					this.vue.imgList.push({
						file
					});
				}
			},
			fileDel(index) {
				this.size = this.size - this.imgList[index].file.size; //总大小
				this.imgList.splice(index, 1);
			},
			bytesToSize(bytes) {
				if(bytes === 0) return '0 B';
				let k = 1000, // or 1024
					sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
					i = Math.floor(Math.log(bytes) / Math.log(k));
				return(bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
			},
		}
	}
</script>

<style scoped="scoped">
	.upload_warp_img_div img {
		max-width: 100%;
		max-height: 100%;
		vertical-align: middle;
	}
	.upload_warp_img_div {
		position: relative;
		height: 100px;
		width: 120px;
		border: 1px solid #ccc;
		margin: 0px 30px 10px 0px;
		float: left;
		line-height: 100px;
		display: table-cell;
		text-align: center;
		background-color: #eee;
		cursor: pointer;
	}
	.upload_warp_img_div_top {
		position: absolute;
		top: 0;
		width: 100%;
		height: 30px;
		background-color: rgba(0, 0, 0, 0.4);
		line-height: 30px;
		text-align: left;
		color: #fff;
		font-size: 12px;
		text-indent: 4px;
	}
	.upload_warp_img_div_text {
		white-space: nowrap;
		width: 80%;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.upload_warp_img_div_del {
		position: absolute;
		top: 6px;
		width: 16px;
		right: 4px;
	}
</style>
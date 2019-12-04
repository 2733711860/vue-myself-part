<template>
	<label>
        <input type="file" accept="image/*" @change="uploadImg($event)"/> 
        <!-- 上传单张图片 -->
    </label>
</template>

<script>
	export default {
		props: {
			maxSize: {
				type: Number,
				default: 1000000
			}
		},
		data() {
			return {
				newUploadImg: {}
			}
		},
		methods: {
			getBase() {
				this.$emit("loadend");
			},

			uploadImg(e) {
				// console.log(e.target.files)
				if(e.target.files.length <= 0) {
					return;
				}
				if(this.checkType(e.target.files[0])) {
					this.getBase64(e.target.files[0], this.getBase);
				}
			},
			//判断是否是图片
			checkType(file) {
		        if (!file.type.match('image.*')) {
		            return false;
		        } else {
		            return true;
		        }
		    },
			//base64
		    getBase64(file, callBack) {
		        let _this = this;
		        _this.readFile(file, callBack);
		    },

		    readFile(file, callBack) {
		        let _this = this;
		        let size = file.size;
		        _this.newUploadImg = {};
		        //读取文件
		        if(window.FileReader) {
		            let fr = new FileReader();
		            fr.onloadstart = function(e) {
		            	// 监听图片开始上传
		            };
		            fr.onloadend = function(e) {
		                // 图片上传结束
		                //显示图片
		                let src = e.target.result;
		                //压缩图片获取base64编码
		                _this.compress(src, callBack);

		                _this.newUploadImg.src = src;
		            };
		            fr.onprogress = function(e) {
		            	// 图片上传中
		            };

		            fr.readAsDataURL(file);
		        } else {
		            alert("请使用高版本浏览器！");
		        }
		    },
		    //压缩图片返回base64
		    compress(src, callBack) {
		        let _this = this;
		        let img = new Image();
		        img.src = src;
		        img.onload = function() {
		            //生成比例
		            let width = img.naturalWidth,
		                height = img.naturalHeight;
		            //生成canvas
		            let $canvas = document.createElement("canvas"); 
		            let ctx = $canvas.getContext('2d');
		            $canvas.width = width;
		            $canvas.height = height;

		            //压缩
		            ctx.drawImage(img, 0, 0, width, height);

		            _this.newUploadImg.w = width;
		            _this.newUploadImg.h = height;
		            _this.newUploadImg.compressedImgSrc = $canvas.toDataURL('image/jpeg', 0.5).substr(22);
		            _this.$parent.loadImgs.push(_this.newUploadImg);
		             
		            if(callBack) {
		            	callBack();
		            }
		        }
		    }
		},
		mounted() {
		}
	}
</script>

<style lang="scss" scoped>
	label {
		input {
			display: none;
		}
	}
</style>
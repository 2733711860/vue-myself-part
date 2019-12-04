<!--
	图片处理：选择图片、上传、删除、预览
-->
<template>
	<div>
        <cube-upload
	        ref="upload"
	        :simultaneous-uploads="1"
	        :process-file="processFile"
	        @file-submitted="fileSubmitted"
	     />
	</div>
</template>

<script>
	import compress from '../../js/image'
	export default {
    data() {
      return {
        action: {
          target: '//jsonplaceholder.typicode.com/photos/',
          prop: 'base64Value',
        }
      }
    },
    methods: {
    	//处理原始文件函数(压缩)
      processFile(file, next) {
        compress(file, {
          compress: {
            width: 200,
            height: 200,
            quality: 0.5
          }
        }, next)
      },
      fileSubmitted(file) {
      	console.log(file)
        file.base64Value = file.file.base64
      }
    },
    components: {
    }
  }
</script>

<style>
</style>
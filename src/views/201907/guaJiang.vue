<!--
	刮奖
-->
<template>
	<div>
		<vue-eraser
        ref="vueEraser"
        :size="50"
        :complete-ratio="0.6"
        :cover-src="coverSrc"
        :result-src="resultSrc"
        :complete-function="completeFunction"
        :progress-function="progressFunction"
        >
        </vue-eraser>
        <el-button @click='reset'>重置</el-button>
        <el-button @click='clear'>清屏</el-button>
	</div>
</template>

<script>
	export default{
		data (){
	        return {
	            coverSrc: 'https://img.zcool.cn/community/01f5795541d50b00000115410b205a.jpg@1280w_1l_2o_100sh.jpg',
	            resultSrc:"http://exueshi.oss-cn-hangzhou.aliyuncs.com/productLogo/2019-2-26-1551143063378.jpg"
	        }
	    },
	    methods: {
	        completeFunction (ratio){
	            console.log("complete");
	        },
	        progressFunction (ratio){
	            console.log(ratio);
	        },
	        reset (){
	            this.$refs.vueEraser.reset();
	        },
	        clear(){
	            this.$refs.vueEraser.clear();
	        }
	    },
	}
</script>

<style>
</style>
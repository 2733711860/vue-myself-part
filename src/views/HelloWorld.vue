<template>
	<div style="overflow: auto;">
		<!--特效搜索框-->
		<div style="height: 100px;padding-left: 50px;background-color: burlywood;">
			<searchInput></searchInput>
		</div>
		<!--输入框-->
		<div style="background-color: palegreen;padding: 20px 0 20px 50px;">
			<div style="margin-bottom: 30px;">
				<myselfInput></myselfInput>
			</div>
			<div style="margin-bottom: 30px;">
				<myselfInput02></myselfInput02>
			</div>
			<div>
				<myselfInput03></myselfInput03>
			</div>
		</div>
		<!--图片翻转文字-->
		<div>
			<pictureAndWord></pictureAndWord>
		</div>
		<!--颜色渐变-->
		<div style="background-color: pink;height: 100px;display: flex;justify-content: center;align-items: center;">
			<changeColor></changeColor>
		</div>
		<!--环形菜单-->
		<div style="height: 300px;display: flex;background-color: darkgoldenrod;padding-left: 80px;">
			<circleMenu></circleMenu>
		</div>
		<!--一行数据轮播-->
		<div style="height: 50px;background-color: #b3effe;padding-left: 50px;">
			<dataSwiper></dataSwiper>
		</div>
		<!--当前时间-->
		<div style="height: 150px;background: #0f3854;background: -webkit-radial-gradient(center ellipse, #0a2e38 0%, #000000 70%);background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);background-size: 100%;">
			<currentTime></currentTime>
		</div>
		<!--轮播图-->
		<div style="background-color: aliceblue;overflow: hidden;">
			<swiper></swiper>
		</div>
		<!--上传图片与图片预览-->
		<div style="background-color: paleturquoise;padding: 50px 0;">
			<picturePreview></picturePreview>
		</div>
		<!--压缩图片-->
		<div style="background-color: lightblue;padding: 50px;display: flex;align-items: center;justify-content: center;">
			<div class="a-upload">
				<input type="file"  accept="image/*" @change="compressImg" capture="camera" />图片压缩
			</div>
			<div>
				<img :src="imgUrl" />
			</div>
		</div>
		<div style="background-color: cornflowerblue;padding: 50px;display: flex;flex-flow: row wrap;">
			<!--手势解锁-->
			<el-button @click="toGestureUnlock">手势解锁</el-button>
			<!--左滑删除-->
			<el-button @click="toLeftMoveDelete">左滑删除</el-button>
			<el-button @click="toLeftMoveDelete2">左滑删除2</el-button>
			<!--左侧导航栏-->
			<el-button @click="toLeftNavPage">左边导航栏</el-button>
			<!--组件传值-->
			<el-button @click="toPartCommunication">组件传值</el-button>
			<!--地址选择-->
			<el-button @click="toChooseAddressPage">地址选择</el-button>
			<!--图片处理-->
			<el-button @click="toPictureOperation">图片处理</el-button>
			<!--视窗滚轮-->
			<el-button @click="toWindowRoller">视窗滚轮</el-button>
			<!--底部弹出mobiscroll-->
			<el-button @click="toMobiscroll_testr">底部弹出</el-button>
			<!--组件通信-->
			<el-button @click="toComponentCommunication">组件通信</el-button>
			<!--图片懒加载-->
			<el-button @click="toPictureLazyLoad">图片懒加载</el-button>
			<!--封装方法-->
			<el-button @click="toFunctionEncapsulation">封装方法</el-button>
			<!--动画效果-->
			<el-button @click="toCssAnimation">动画效果</el-button>
			<!--进度条-->
			<el-button @click="toProgressBar">进度条</el-button>
			<!--文件上传-->
			<el-button @click="toFileUpload">文件上传</el-button>
			<!--导航内容-->
			<el-button @click="toNavContent">导航内容</el-button>
			<!--超级表格-->
			<el-button @click="toSuperTable">超级表格</el-button>
			<!--刷新加载-->
			<el-button @click="toFreshLoad">刷新加载</el-button>
			<!--刮奖-->
			<el-button @click="toGuaJiang">刮奖</el-button>
			<!--图片预览-->
			<el-button @click="toPictureYuLan">图片预览</el-button>
			<!--select组件-->
			<el-button @click="toSelect">选择组件</el-button>
			<!--全选-->
			<el-button @click="toSelectAll">全选、刷新当前页</el-button>
			<!--上传预览-->
			<el-button @click="toUploadPreview">上传预览</el-button>
			<!--倒计时-->
			<el-button @click="toCountdown">倒计时</el-button>
			<!--拖拽移动-->
			<el-button @click="toDraggable">拖拽移动</el-button>
			<!--添加表格-->
			<el-button @click="toAddTable">添加表格</el-button>
			<!--树形图-->
			<el-button @click="toTreePage">树形图</el-button>
			<!--签名-->
			<el-button @click="toSignature">签名</el-button>
			<!--表单验证-->
			<el-button @click="toValidatePage">表单验证</el-button>
			<!--弹框-->
			<popup style="margin-left: 10px;"></popup>
		</div>
		<!--树形图-->
		<div style="padding: 50px;background-color: mediumspringgreen;">
			<treeData></treeData>
		</div>
	</div>
</template>

<script>
	import myselfInput from '../components/input/myself_input.vue'
	import myselfInput02 from '../components/input/myself_input02.vue'
	import myselfInput03 from '../components/input/myself_input03.vue'
	import pictureAndWord from '../components/pictureAndWord/pictureAndWord.vue'
	import changeColor from '../components/changeColor/changeColor.vue'
	import popup from '../components/popup/popup.vue'
	import circleMenu from '../components/circleMenu/circleMenu.vue'
	import searchInput from '../components/searchInput/searchInput.vue'
	import dataSwiper from '../components/dataSwiper/dataSwiper.vue'
	import currentTime from '../components/currentTime/currentTime.vue'
	import swiper from '../components/swiper/swiper.vue'
	import picturePreview from '../components/picturePreview/picturePreview.vue'
	import treeData from '../components/treeData/treeData.vue'
	export default{
		data(){
			return{
				fatherdata:'',
				imgUrl:''
			}
		},
		components: {
			myselfInput,
			myselfInput02,
			myselfInput03,
			pictureAndWord,
			changeColor,treeData,
			popup,circleMenu,searchInput,dataSwiper,currentTime,swiper,picturePreview,
		},
		methods:{
			toLeftNavPage(){
				this.$router.push({
					name:"leftNavPage"
				})
			},
			//图片压缩
			compressImg(e){
				let _this = this;
				if(e.target.files){
					lrz(e.target.files[0],{
						width:200,		//图片最大的宽度，默认为原图的宽度
						height:200,		//图片最大的高度，默认为原图的高度
						quality:1,		//图片压缩质量，取值0-1，默认为0.7
						filedName:'file'	//后端接收的字段名，默认为 ‘file’
					})
		            .then(function(rst) {
		                //成功时执行
		                _this.imgUrl = rst.base64;
		            }).catch(function(error) {
		                //失败时执行
		            }).always(function() {
		                //不管成功或失败，都会执行
		            })
				}
			},
			//手势解锁
			toGestureUnlock(){
				this.$router.push({
					name:"gestureUnlockPage"
				})
			},
			//左滑删除
			toLeftMoveDelete(){
				this.$router.push({
					name:"leftMoveDelete"
				})
			},
			toLeftMoveDelete2(){
				this.$router.push({
					name:"leftMoveDelete2"
				})
			},
			toPartCommunication(){
				this.$router.push({
					name:"partCommunication"
				})
			},
			toChooseAddressPage(){
				this.$router.push({
					name:"chooseAddressPage"
				})
			},
			toPictureOperation(){
				this.$router.push({
					name:"pictureOperation"
				})
			},
			toWindowRoller(){
				this.$router.push({
					name:"windowRoller"
				})
			},
			toMobiscroll_testr(){
				this.$router.push({
					name:"mobiscroll_test"
				})
			},
			toComponentCommunication(){
				this.$router.push({
					name:"componentCommunication"
				})
			},
			toPictureLazyLoad(){
				this.$router.push({
					name:"pictureLazyLoad"
				})
			},
			toFunctionEncapsulation(){
				this.$router.push({
					name:"functionEncapsulation"
				})
			},
			toCssAnimation(){
				this.$router.push({
					name:"cssAnimation"
				})
			},
			toFileUpload(){
				this.$router.push({
					name:"fileUpload"
				})
			},
			toProgressBar(){
				this.$router.push({
					name:"progressBar"
				})
			},
			toNavContent(){
				this.$router.push({
					name:"navContentPage"
				})
			},
			toSuperTable(){
				this.$router.push({
					name:"superTable"
				})
			},
			toFreshLoad(){
				this.$router.push({
					name:"freshLoad"
				})
			},
			toGuaJiang(){
				this.$router.push({
					name:"guaJiang"
				})
			},
			toPictureYuLan(){
				this.$router.push({
					name:"pictureYuLan"
				})
			},
			toSelect(){
				this.$router.push({
					name:"select"
				})
			},
			toSelectAll(){
				this.$router.push({
					name:"selectAll"
				})
			},
			toUploadPreview(){
				this.$router.push({
					name:"uploadPreview"
				})
			},
			toCountdown(){
				this.$router.push({
					name:"countdown"
				})
			},
			toDraggable(){
				this.$router.push({
					name:"draggable"
				})
			},
			toAddTable(){
				this.$router.push({
					name:"addTable"
				})
			},
			toTreePage(){
				this.$router.push({
					name:"treePage"
				})
			},
			toSignature(){
			  this.$router.push({
					name:"signature"
				})
			},
			toValidatePage () {
				this.$router.push({
					name:"validatePage"
				})
			}
		}
	}
</script>
<style scoped="scoped">
	.a-upload {
		text-align: center;
		width: 100px;
		height: 38px;
		line-height: 38px;
		position: relative;
		cursor: pointer;
		border: 1px solid #999999;
		border-radius: 8px;
		overflow: hidden;
		display: inline-block;
		margin-left: 20px;
	}

	.a-upload  input {
		width: 100px;
		position: absolute;
		right: 0;
		top: 0;
		opacity: 0;
		filter: alpha(opacity=0);
		cursor: pointer
	}
</style>
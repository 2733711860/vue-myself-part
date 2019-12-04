<template>
	<div>
		<el-button @click="chooseOne">选择</el-button>
		<input id="custTypeList" type="hidden" />
		<div style="display: flex;flex-flow: row;justify-content: space-around;height: 40px;align-items: center;">
			<div>选择的text:{{chooseText}}</div>
			<div>选择的code:{{chooseCode}}</div>
		</div>
	</div>
</template>

<script>
	import {formatDate} from '../../js/commonFunction.js'
	export default{
		data(){
			return{
				chooseText:'',
				chooseCode:'',
				pracData:[
					{text:'李世民',value:'001'},{text:'武则天',value:'002'},{text:'康熙',value:'003'},
					{text:'雍正',value:'004'},{text:'华为',value:'005'},{text:'小米',value:'006'},
				],
			}
		},
		mounted(){
			this.chooseOneOne();
		},
		methods:{
			chooseOne(){
				$('#custTypeList').click();
			},
			chooseOneOne(){
				/*
				 *需要改变的：id:custTypeList
				 * 			 data:that.pracData
				 * 			 onSelect:选择后的操作
				 */
				var that = this;
				var heightNumPx = getComputedStyle(document.body).fontSize;
				var heightNum = parseInt(heightNumPx);
				$('#custTypeList').mobiscroll().select({
				    theme: 'ios',
				    display: 'bottom',
				    height: heightNum * 1.8,
				    lang : 'zh',
				    data : that.pracData,
				    onInit : function () {
				    	$('#custTypeList_dummy').css('display','none');
				    },
				    onSelect : function (value, inst) {
				    	that.chooseCode = inst._tempValue;
				    	that.chooseText = value;
				    }
				});
				$('#custTypeList_dummy').css('display','none');
			}
		}
	}
</script>

<style lang="scss">
	.dw-i{font-size: .38rem;text-align: center;}
	.mbsc-ios .dwbw{padding: .1rem 0;}
	.mbsc-ios .dwb{font-size: .4rem;}
	.dwbc{height: 1.2rem;background-color: #f3f3f3;z-index: 100;}
	.dwwc{background-color: white;}
</style>
<!--
	封装方法
-->
<template>
	<div>
	</div>
</template>

<script>
	import {removeRepeatArray,strToDate} from '../js/commonFunction.js'
	export default{
		mounted(){
			var aa = strToDate('2013-02-27')
			console.log(aa)
			
			var arr =['a','c' ,'a','ab','c' ,'a','ab','c' ,'ab','a','a'];
			//先数组去重
			var arr1 = this.newArr(arr);
			//返回某个元素在数组中出现的次数
			var result = {};
			for(var i=0;i<arr1.length;i++){
				var lengthl = this.getEleCount(arr,arr1[i]);
				result[arr1[i]] = lengthl;
			}
			console.log(result)
		},
		methods:{
			//返回某个元素在数组中出现的次数
			getEleCount(arr, ele) {
				var num = 0;
				for (var i = 0, len = arr.length; i < len; i++) {
					if (ele == arr[i]) {
						num++;
					}
				}
				return num;
			},
			//先数组去重
			newArr(arr){
			    for(var i=0;i<arr.length;i++){
			        for(var j=i+1;j<arr.length;j++){
			            if(arr[i]==arr[j]){ 
				            //如果第一个等于第二个，splice方法删除第二个
				            arr.splice(j,1);
				            j--;
			            }
			        }
			    }
			    return arr;
			}
		}
	}
</script>

<style scoped="scoped">
</style>
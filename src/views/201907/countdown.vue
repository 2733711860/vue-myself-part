<!--
	倒计时
-->
<template>
	<div>
		倒计时：{{countTime}}
	</div>
</template>

<script>
	import {getEndTime} from '../../js/commonFunction.js'
	export default{
		data(){
			return{
				endTime:'2019-07-24 11:36:00',
				countTime:'',
				countdownTimer:'',//计时器
			}
		},
		mounted(){
			this.countTime = getEndTime(this.endTime);
	        this.countdownTimer = setInterval(() => {
	        	console.log('1111')
	            this.countTime = getEndTime(this.endTime);
	            if(this.countTime == '时间已到'){
		        	clearInterval(this.countdownTimer);
		        }
	        },1000)
		}
	}
</script>

<style>
</style>
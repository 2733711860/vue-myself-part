<template>
	<div>
		<!--输入框-->
        <input type='text' v-model="thisNameValue">
        <span>{{thisName}}</span>
	</div>
</template>

<script>
	export default{
		props:{
			name:''
		},
		data(){
			return{
				thisName:this.name,
				thisNameValue:''
			}
		},
		created(){
			console.log("来自父组件："+this.thisName)
		},
		watch:{
			thisNameValue(val){
				this.$emit('change',val);
			}
		}
	}
</script>

<style scoped="scoped">
	/*布局实现*/
	
	div  {
		position: relative;
	}
	
	div  input {
		width: 200px;
		height: 30px;
		line-height: 30px;
		background: rgba(255, 255, 255, 0.1);
		border: none;
		outline: none;
		border: 1px solid #fff;
		color: #377D6A;
		padding: 0 10px;
		border-radius: 4px;
		text-indent: 38px;
		transition: all .3s ease-in-out;
		border: 1px solid #999;
	}
	
	div  input ::-webkit-input-placeholder {
		color: transparent;
	}
	
	div  input+span {
		position: absolute;
		left: 0;
		top: 0;
		color: #fff;
		background: #7AB893;
		display: inline-block;
		padding: 7px 4px;
		transform-origin: left center;
		transform: perspective(300px);
		transition: all .3s ease-in-out;
		border-radius: 4px 0 0 4px;
	}
	
	div  input:focus,
	div  input:active {
		text-indent: 0;
		background: rgba(255, 255, 255, 0.2);
	}
	
	div:nth-child(1) input:focus,
	div:nth-child(1) input:active {
		border-radius: 0 4px 4px 0;
	}
	
	div:nth-child(1) input:focus+span,
	div:nth-child(1) input:active+span {
		border-radius: 4px 0 0 4px;
		transform: translateX(-100%);
	}
</style>
<template>
	<div style="display: flex;">
		<input class="nameLeft" v-model="namefron" />
		<input type="text" v-model="toParent" />
	</div>
</template>

<script>
	export default{
		props:{
			name:'',
		},
		data(){
			return{
				namefron:this.name,
				toParent:''
			}
		},
		watch:{
			toParent(val){
				this.$emit('change',val);
			}
		}
	}
</script>

<style scoped="scoped">
	input[type='text'] {
		outline: none;
		padding: 0 10px;
		width: 160px;
		height: 30px;
		border: none;
		background-color: transparent;
		color: white;
		background-color: rgba(0, 0, 0, .15);
	}
	
	.nameLeft {
		outline: none;
		height: 30px;
		width: 40px;
		text-align: center;
		background-color: rgba(0, 0, 0, .25);
		border: 0;
		color: white;
	}
</style>
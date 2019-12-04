<template>
	<div>
		<div style="display: flex;flex-flow: row;padding: .2rem;">
			<div>进度条：</div>
			<div class="progressMy">
				<span class="progressMy01"></span>
				<span class="progressMy02" :style="{width:standardRateP50}"></span>
			</div>
			<div style="margin-left: .2rem;">{{standardRateP50}}</div>
		</div>
		<div>
			<el-button @click="startUpload">上传</el-button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				standardRateP50:'',
				valueName:''
			}
		},
		mounted(){
		},
		methods:{
			startUpload(){
				this.valueName = '0';
				let _this = this;
				var aaacc = setInterval(function(){
					_this.valueName++;
					_this.standardRateP50 = _this.valueName + "%";
					if(_this.standardRateP50=='100%'){
						clearInterval(aaacc);
					}
				},100)
			}
		}
	}
</script>

<style scoped="scoped">
	.progressMy{
		flex: 1;
		position: relative;
	}
	.progressMy01{
		width:100%; background:#f3f3f3; border-radius: 3px; display:block; height:.15rem; margin-top:.13rem;
	}
	.progressMy02{
		background: linear-gradient(45deg, #9CD2FF, #586AFF); 
		background: -webkit-linear-gradient(45deg, #9CD2FF, #586AFF); 
		border-radius: 3px; display:block; height:.15rem; position:absolute;top:.13rem;
	}
</style>
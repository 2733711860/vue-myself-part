<template>
	<div>
		<div class="self-cell">
			<div class="self-cell-title">{{label}}</div>
			<div class="self-cell-right">
				<div class="self-cell-value">{{content}}</div>
				<i :class="'arrow-'+arrowDirection"></i>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		value: {
      type: [String, Number],
      default: ''
    },
    label: '',
    arrowDirection: '' // 箭头方向
	},
	data () {
		return {
			content: this.value
		}
	},
	mounted () {
	},
  methods: {
  }
}
</script>

<style scoped="scoped">
	.self-cell{
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: .15rem 0;
		margin: 0 .15rem;
		border-bottom: 1px solid #DFDFDF;
	}
	.self-cell-right{
		display: flex;
		flex: 1;
		justify-content: flex-end;
		align-items: center;
	}
	.self-cell-value{
		margin-right: .08rem;
	}
	.arrow-right{
		width: .16rem;
		height: .16rem;
		background: url(../../../../static/img/rightGray.png) no-repeat;
		background-size: 100% 100%;
	}
	.arrow-down{
		width: .16rem;
		height: .16rem;
		background: url(../../../../static/img/bottom.png) no-repeat;
		background-size: 100% 100%;
	}
	.arrow-left{
		width: .16rem;
		height: .16rem;
		background: url(../../../../static/imgs/back01.png) no-repeat;
		background-size: 100% 100%;
	}
</style>
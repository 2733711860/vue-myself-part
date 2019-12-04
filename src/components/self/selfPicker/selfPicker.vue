<template>
	<div>
		<div class="self-cell">
			<div class="self-cell-title">{{label}}</div>
			<div class="self-cell-right" @click="show=!show">
				<div class="self-cell-value">{{chooseItem}}</div>
				<i :class="'arrow-'+arrowDirection"></i>
			</div>
		</div>

		<van-popup v-model="show" position="bottom">
			<van-picker
			  show-toolbar
			  :title="label"
			  :columns="pickerList"
			  :default-index="defaultIndex"
			  @cancel="onCancel"
			  @confirm="onConfirm"
			  @change="onChange"
			/>
		</van-popup>
	</div>
</template>

<script>
export default {
	props: {
		label: '', // 选择器的名字
		value: '',
		pickerList: '', // 选择项
		defaultIndex: {
			type: Number,
			default: 0
		}, // 默认项
		arrowDirection: '' // 箭头方向
	},
	model: {
		prop: 'value',
		event: 'toParent'
	},
	data () {
		return {
			show: false,
			chooseItem: this.value // 选择的项
		}
	},
	watch: {
		value() {
			this.chooseItem = this.value
		}
	},
	mounted () {
		this.chooseItem = this.pickerList[this.defaultIndex].text
	},
  methods: {
  	onConfirm(value, index) {
      this.$emit('choosePicker', value)
      this.show = false
    },
    onCancel() {
      this.show = false
    },
    onChange(picker, values) {
    	this.$emit('chooseChange', values)
    	this.$emit('toParent', values.text)
    }
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
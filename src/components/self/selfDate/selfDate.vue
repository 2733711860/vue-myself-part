<template>
	<div>
		<div class="self-cell">
			<div class="self-cell-title">{{label}}</div>
			<div class="self-cell-right" @click="show=!show">
				<div class="self-cell-value">{{chooseDate}}</div>
				<i :class="'arrow-'+arrowDirection"></i>
			</div>
		</div>

		<van-popup v-model="show" position="bottom">
			<van-datetime-picker
			  v-model="nowValue"
			  type="date"
			  :max-date="maxDate"
			  :min-date="minDate"
			  @confirm="confirm"
			  @cancel="cancel"
			/>
		</van-popup>
	</div>
</template>

<script>
export default {
	props: {
		value: '',
    label: '',
    arrowDirection: '' // 箭头方向
	},
	model: {
		prop: 'value',
		event: 'toParent'
	},
	data () {
		return {
			show: false,
			nowValue: new Date(),
			maxDate: new Date('2100-12-31'),
			minDate: new Date('1900-01-01'),
			chooseDate: this.value // 选择的日期
		}
	},
	mounted () {
		console.log(this.minDate)
	},
  methods: {
  	confirm (value) {
  		this.show = false
  		this.chooseDate = this.formatDate(value, 'yyyy-MM-dd')
  		this.$emit('toParent', this.chooseDate)
  		this.$emit('chooseTime', this.chooseDate)
  	},
  	cancel () {
  		this.show = false
  	},
  	formatDate(date, fmt) {
		  if (/(y+)/.test(fmt)) {
		    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		  }
		  let o = {
		    'M+': date.getMonth() + 1,
		    'd+': date.getDate(),
		    'h+': date.getHours(),
		    'm+': date.getMinutes(),
		    's+': date.getSeconds()
		  };
		  for (let k in o) {
		    if (new RegExp(`(${k})`).test(fmt)) {
		      let str = o[k] + '';
		      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
		    }
		  }
		  return fmt;
		},
		padLeftZero(str) {
		  return ('00' + str).substr(str.length);
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
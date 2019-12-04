<template>
	<div>
		<!--input框-->
		<div style="padding: .15rem;text-align: center;background-color: #6F75B0;color: white;">input框</div>
		<self-input
			:label="inputObj.input1.name"
			isMust
			v-model='inputObj.input1.value'
		></self-input>
		<van-button type="primary" size="large" @click="checkValidate()">大号按钮</van-button>

		<div style="height: 50px;"></div>

		<!--单元格-->
		<div style="padding: .15rem;text-align: center;background-color: #6F75B0;color: white;">cell单元格</div>
		<self-cell
			:label="cellObj.cell1.cellLeft"
			arrow-direction="right"
			v-model='cellObj.cell1.cellRight'
		></self-cell>

		<!--时间选择-->
		<div style="padding: .15rem;text-align: center;background-color: #6F75B0;color: white;">时间选择</div>
		<self-date
			:label="chooseTimeObj.chooseTime1.chooseTimeName"
			arrow-direction="right"
			v-model='chooseTimeObj.chooseTime1.chooseTimeValue'
			@chooseTime="chooseTime"
		></self-date>

		<!--选择器-->
		<div style="padding: .15rem;text-align: center;background-color: #6F75B0;color: white;">选择器</div>
		<self-picker
			:label="pickerObj.picker1.pickerName"
			v-model="pickerObj.picker1.pickerValue"
			arrow-direction="right"
			:pickerList="pickerList"
			:defaultIndex="defaultIndex"
			@choosePicker="choosePicker"
			@chooseChange="chooseChange"
		></self-picker>

	</div>
</template>

<script>
import selfInput from '../../components/self/selfInput/selfInput.vue'
import selfCell from '../../components/self/selfCell/selfCell.vue'
import selfDate from '../../components/self/selfDate/selfDate.vue'
import selfPicker from '../../components/self/selfPicker/selfPicker.vue'
export default {
	components: {
		selfInput, selfCell, selfDate, selfPicker
	},
	data () {
		return{
			inputObj: { // 输入框部分
				input1: {
					value: '',
					name: '用户姓名'
				}
			},

			cellObj: { // 单元格部分
				cell1: {
					cellLeft: '路由名称',
				  cellRight: '路由名称1'
				}
			},

			chooseTimeObj: { // 时间选择
				chooseTime1: {
					chooseTimeName: '出生日期',
				  chooseTimeValue: '请选择'
				}
			},

			pickerObj: { // 选择器
				picker1: {
					pickerName: '国籍',
					pickerValue: ''
				}
			},
			defaultIndex: 2, // 默认项
			pickerList: [
        { text: '杭州', code: '0' },
        { text: '宁波', code: '1' },
        { text: '温州', code: '2' }
      ]
		}
	},
	mounted () {
	},
	methods: {
		checkValidate () {
			window.utils.validator.isEmpty(this.inputObj, () => { // 非空校验
				console.log(this.chooseTimeObj.chooseTime1.chooseTimeValue)
				console.log(this.pickerObj.picker1.pickerValue)
			})
		},
		chooseTime (chooseDate) { // 选择了日期
			console.log(chooseDate)
		},
		choosePicker (value) { // 选择器选择确定
			console.log(value)
		},
		chooseChange (value) { // 选择器选择改变
			console.log(value)
		}
	}
}
</script>

<style>
</style>
import Vue from 'vue'
import { Dialog } from 'vant'

var validator = {
	isEmpty: function (pageData, callback) {
		var index = 0
		for (let item in pageData) {
			index++
			if (pageData[item].value == '') {
				Dialog.alert({
				  title: '标题',
				  message: pageData[item].name + '不能为空！'
				})
				return false
			} else {
				if (index == Object.keys(pageData).length) {
					callback()
				}
			}
		}
	}
}
export default validator;

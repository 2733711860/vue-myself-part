import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

	/*
	 *定义一些属性初始值
	 */
	const state = {
		callbackData:{
			data:{
				list:[]
			}
		}, //接口公共方法
		
		//partCommunication02里的值
		partCommunicationData:null,
		
		//组件二传给组件三的值
		two_origin:null,
		
		//加载动画显示
		getLoading:false,
	};
	
	/*
	 *实时监听值，获取值
	 * this.$store.getters('getPageName')
	 */
	const getters = {
		//接口公共方法
		getCallbackData(state) {
			return state.callbackData;
		},
		//partCommunication02里的值
		getPartCommunicationData(state) {
			return state.partCommunicationData;
		},
		//组件二传给组件三的值
		getTwo_origin(state) {
			return state.two_origin;
		},
		//加载动画显示
		getLoadingFun(state) {
			return state.getLoading;
		}
	};
	
	/*
	 *改变state初始值
	 * this.$store.commit('changePageName',6)
	 */
	const mutations = {
		//接口公共方法
		changeCallbackData(state,data) {
			state.callbackData = data;
		},
		//partCommunication02里的值
		changePartCommunicationData(state,data) {
			state.partCommunicationData = data;
		},
		//组件二传给组件三的值
		changeTwo_origin(state,data) {
			state.two_origin = data;
		},
		//加载动画显示
		changeGetLoading(state,data) {
			state.getLoading = data;
		}
	};
	
	/*
	 * 异步操作
	 * this.$store.dispatch('changePageName_actions',6)
	 */
	const actions = {
		//调接口公共方法
		useAPI(context,data){
			axios.get(data.url,data.dataJson).then(function(res){
				context.commit("changeCallbackData",res);
			})
		},
		//partCommunication02里的值
		partCommunicationData_action(context,data){
			context.commit('changePartCommunicationData',data);
		},
		//组件二传给组件三的值
		actionTwo_origin(context,data){
			context.commit("changeTwo_origin",data);
		},
		//加载动画显示
		show(context){
			context.commit("changeGetLoading",true);
		},
		//加载动画显示
		close(context){
			context.commit("changeGetLoading",false);
		}
	}
	
	
	const store = new Vuex.Store({
		state,
		getters,
		mutations,
		actions
	})
	
//导出store状态
export default store
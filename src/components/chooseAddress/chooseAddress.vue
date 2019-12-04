<template>
	<div style="width: 100%;">
		<div style="width: 100%;position: fixed;bottom: 0;">
			<input type="text" v-model="addressResult" class="resInp" readonly="readonly" />
			<cube-button @click="chooseAddress" style="background-color:rgba(0,0,0,0.3);outline: none;">选择地址</cube-button>
		</div>
		
		<cube-drawer
	        ref="drawer"
	        title="地址"
	        :data="data"
	        :selected-index="selectedIndex"
	        @change="changeHandler"
	        @select="selectHandler"
	        @cancel="cancelHandler">
        </cube-drawer>
	</div>
</template>

<script>
	import { provinceList, cityList, areaList } from '../../data/area'
	export default {
		data() {
			return {
				isFirstEnter:false, // 是否第一次进入，默认false
				str: "",  // 加载页面后执行获取数据的方法，插入到此
				addressResult:'',
				selectedIndex: [],
		        data: [
			        provinceList,
			        [],
			        []
		        ]
			}
		},
		components: {},
		created() {
		},
		mounted() {
		},
		methods: {
			chooseAddress() {
				this.$refs.drawer.show();
			},
			changeHandler(index, item, selectedVal, selectedIndex, selectedText) {
				setTimeout(() => {
					let data
					if(index === 0) {
						data = cityList[item.value]
					} else {
						data = areaList[item.value]
					}
					this.$refs.drawer.refill(index + 1, data)
				}, 50)
			},
			selectHandler(selectedVal, selectedIndex, selectedText) {
				this.addressResult = selectedText.join(' ');
			},
			cancelHandler() {
				console.log('cancel')
			},
		},
	}
</script>

<style scoped="scoped">
    .resInp{
    	text-align: center;
    	width: 100%;
    	height: 40px;
    	overflow-x: auto;
    	border: none;
    	outline: none;
    	color: cadetblue;
    	background-color:rgba(255,255,255,0);
    }
</style>
<template>
	<div>
		<select-part :options="options" v-model="value"></select-part>
	</div>
</template>

<script>
	import selectPart from '../../components/selectPart/selectPart.vue'
	export default{
		data(){
			return{
				value: { //默认选中哪个
	                id: 2,
	                value: "option2"
	            },
	            options: [{
	                id: 1,
	                value: "option1"
	            }, {
	                id: 2,
	                value: "option2"
	            }, {
	                id: 3,
	                value: "option3"
	            }, {
	                id: 4,
	                value: "option4"
	            }, {
	                id: 5,
	                value: "option5"
	            }, {
	                id: 6,
	                value: "option6"
	            }, {
	                id: 7,
	                value: "option7"
	            }, {
	                id: 8,
	                value: "option8"
	            }]
	        }
		},
		components:{
			selectPart,
		}
	}
</script>

<style>
</style>
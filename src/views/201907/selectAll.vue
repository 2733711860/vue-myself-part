<!--
	全选
-->
<template>
	<div>
		<div  style="height: 100px;">
			<input type="checkbox" v-model='checked' v-on:click='checkedAll'> 全选{{checked}}
		</div>
        <div style="height: 100px;" v-for="(list,index) in checkboxList">
            <input type="checkbox" v-model='checkList' :value="list.id"> {{list.product_inf}}
        </div>
        {{checkList}}
        
        <el-button @click="refreshPage">刷新</el-button>
    </div>
</template>

<script>
	export default{
		data(){
            return{
            	checkboxList: [{
		                'id': '1',
		                'product_inf': '女士银手链'
		            }, {
		                'id': '2',
		                'product_inf': '女士银手镯'
		            }, {
		                'id': '3',
		                'product_inf': '女士银耳环'
		            }],
	            checked: false, //全选框
	            checkList: []
            }
        },
        inject:['reload'],
        methods: {
            checkedAll: function() {
                var _this = this;
                if (_this.checked) { //实现反选
                    _this.checkList = [];
                } else { //实现全选
                    _this.checkList = [];
                    this.checkboxList.forEach(function(item, index) {
                        _this.checkList.push(item.id);
                    });
                }
            },
            //刷新当前页面
            refreshPage(){
            	this.reload();
            }
        },
        watch: {
            'checkList': {
                handler: function(val, oldVal) {
                    if (val.length === this.checkboxList.length) {
                        this.checked = true;
                    } else {
                        this.checked = false;
                    }
                },
                deep: true
            }
        },
	}
</script>

<style>
</style>
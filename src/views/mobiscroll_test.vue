<template>
	<div>
		<div class="mobiscroll_test_line">
			<div class="mobiscroll_test_line_left">开始时间</div>
			<div class="mobiscroll_test_line_right" @click="chooseTime('startTime')">{{starttime}}</div>
		</div>
		<div class="mobiscroll_test_line">
			<div class="mobiscroll_test_line_left">结束时间</div>
			<div class="mobiscroll_test_line_right" @click="chooseTime('endTime')">{{endtime}}</div>
		</div>
		<div class="mobiscroll_test_line">
			<div class="mobiscroll_test_line_left">毕业学校</div>
			<div class="mobiscroll_test_line_right" @click="chooseSchool">{{graduateSchool}}</div>
		</div>
		
		<input type="hidden" id="monthInput"/>
		<input type="hidden" id="schoolType" />
	</div>
</template>

<script>
	export default{
		data(){
			return{
				starttime:'',
				endtime:'',
				chooseindex:'',
				graduateSchool:'',
				schoolMsg:[
					{
						text:"安徽建筑大学",
						value:"1"
					},
					{
						text:"中国科技大学",
						value:"2"
					},
					{
						text:"合肥工业大学",
						value:"3"
					},
					{
						text:"安徽大学",
						value:"4"
					}
				]
			}
		},
		components:{},
		created(){},
		mounted(){
			this.chooseDate();
			this.chooseschool();
		},
		methods:{
			chooseTime(timeFlag){
				this.chooseindex = timeFlag
                $('#monthInput').click();
			},
			chooseSchool(){
				$("#schoolType").click();
			},
			//选择日期
			chooseDate(){
                var heightNumPx = getComputedStyle(document.body).fontSize;
                var heightNum = parseInt(heightNumPx);
                var that = this;
                var w = document.body.clientWidth;
                $('#monthInput').mobiscroll().datetime({
                    theme: 'ios',
                    display: 'bottom',
                    lang : 'zh',
                    preset : 'datetime',
                    dateFormat : 'yyyy-mm-dd',
                    timeFormat: 'HH:ii',
                    timeWheels: 'HHii',
                    height: heightNum *2.5,
                    dateOrder : 'yymmdd',

                    minDate : new Date(),
                    maxDate : new Date(2038, 11, 31),
                    onSelect : function (value) {
                        let time=new Date(value.replace(/-/g,  "/")).getTime();
                        let time1=new Date(that.starttime.replace(/-/g,  "/")).getTime();
                        let time2=new Date(that.endtime.replace(/-/g,  "/")).getTime();
                        if(that.chooseindex=='startTime'){
                            that.starttime=value;
                        }else{
                            that.endtime=value;
                        }
                    }
                }
            )},
            //选择项（毕业院校）
            chooseschool(){
            	var that = this;
                var heightNumPx = getComputedStyle(document.body).fontSize;
                var heightNum = parseInt(heightNumPx);

                $('#schoolType').mobiscroll().select({
                    theme: 'ios',
                    display: 'bottom',
                    height: heightNum * 2.5,
                    lang : 'zh',
                    data : that.schoolMsg,
                    onInit : function () {
                        $('#schoolType_dummy').css('display','none');
                    },
                    onSelect : function (value, inst) {
                        that.graduateSchool=value;
                    }
                });
                $('#schoolType_dummy').css('display','none');
            }
		}
	}
</script>

<style lang="scss">
	.dw-i {
	    color: #333;
	    text-overflow: center;
	    font-size: .5rem;
	    text-align: center
	}
</style>
<style scoped="scoped">
	.mobiscroll_test_line{
		padding: 10px 10px;
		font-size: .5rem;
		display: flex;
		justify-content: space-between;
	}
	.mobiscroll_test_line_left{
		width: 30%;
	}
	.mobiscroll_test_line_right{
		flex: 1;
		text-align: right;
	}
</style>
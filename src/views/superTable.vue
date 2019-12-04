<template>
	<div>
		<div style='height: 100vh;'>
			<div id="left_div">
				<div id="left_div1">
					<table id="left_table1">
						<tr style="background-color: white;">
							<th>姓名</th>
						</tr>
					</table>
				</div>
				<div id="left_div2" :style="left_div2_height">
					<table id="left_table2">
						<tr v-for="x in list">
							<td style="width: 1rem;">{{x.name}}</td>
						</tr>
					</table>
				</div>
			</div>
			<div id="right_div">
				<!--右上-->
				<div id="right_div1">
					<div :style="right_divx">
						<table id="right_table1">
							<tr style="background-color: white;">
								<th style="width: 1rem;">代号</th>
								<th style="width: 1rem;">朝代</th>
								<th style="width: 1rem;">阵营</th>
								<th style="width: 1rem;">主公</th>
								<th style="width: 1rem;">武器</th>
							</tr>
						</table>
					</div>
				</div>
				<div id="right_div2" ref="viewBox" :style="right_div2_height">
					<table id="right_table2">
						<tr v-for="xx in list">
							<td style="width: 1rem;">{{xx.daihao}}</td>
							<td style="width: 1rem;">{{xx.time}}</td>
							<td style="width: 1rem;">{{xx.ouner}}</td>
							<td style="width: 1rem;">{{xx.lingdao}}</td>
							<td style="width: 1rem;">{{xx.wuqi}}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				right_divx:'',
				left_div2_height:'',
				right_div2_height:'',
				
				list:[
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'},
					{name:'关羽',daihao:'将军',time:'三国',ouner:'刘备',lingdao:'刘备',wuqi:'青龙偃月刀'}
				]
			}
		},
		mounted(){
			this.scrollTable();
		},
		methods:{
			//表格滚动
			scrollTable(){
				//设置右上的宽度
				var youshang = document.body.clientWidth + 20;
				this.right_divx={width:youshang};
				
				//设置左下的高度
				var appHeight = document.body.clientHeight;  //APP的高度
				var topTable = document.querySelector('#right_div1').clientHeight;  //上表格的高度
				var zuoxia = appHeight - topTable -10;
				this.left_div2_height = {height:zuoxia}
				
				//设置右下高度
				var youxia = zuoxia + 10;
				this.right_div2_height = {height:youxia}
				console.log(this.left_div2_height)
				console.log(this.right_div2_height)
				
				//监听滚动情况
				let _this = this;
				var right_div2 =  _this.$refs.viewBox;
				right_div2.addEventListener('scroll',() =>{
					var right_div2_top = right_div2.scrollTop;
				    var right_div2_left = right_div2.scrollLeft;
				    document.getElementById("left_div2").scrollTop = right_div2_top;
				    document.getElementById("right_div1").scrollLeft = right_div2_left;
				},false)
			}
		}
	}
</script>

<style scoped="scoped">
	tr{height: .4rem;border-bottom: solid 1px #ededed;font-size: .15rem;}
	td{vertical-align: middle;}
	th{vertical-align: middle;font-weight: bold;}
	#left_div{width:20vw;float: left;}
	#left_div1{width: 100%;}
	#left_table1{width: 100%;text-align: center;}
	#left_div2{width: 100%;overflow: hidden;}
	#left_table2{width: 100%;text-align: center;}
	#right_div{width: 80vw;float: left;}
	#right_div1{overflow: hidden;}
	#right_div2{width: 100%;overflow: auto;overflow-y: auto;}
	#right_table1{text-align: center;width: 110vw;}
	#right_table2{text-align: center;width: 110vw;}
</style>
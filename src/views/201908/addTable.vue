<template>
	<div>
		<table>
			<tr>
				<th v-for="xx in thList">{{xx}}</th>
			</tr>
			<tr v-for="(yy,index) in tdList">
				<td>{{index+1}}</td>
				<td>{{yy.nameLei}}</td>
				<td>{{yy.time}}</td>
				<td>{{yy.caozuo}}</td>
				<td @click="delet(index)">{{yy.caozuo2}}</td>
			</tr>
		</table>
		
		<div>
			<el-button @click='addOne'>添加</el-button>
			<input id="pic" style="display: none;" type="file" accept="image/*" @change="uploadImg($event)"/>
		</div>
	</div>
</template>

<script>
	import {formatDate} from '../../js/commonFunction.js'
	export default{
		data(){
			return{
				thList:['序号','类别名称','时间','预览','删除'],
				tdList:[
					{nameLei:'风景照',time:'2019-01-01',caozuo:'预览',caozuo2:'删除'},
					{nameLei:'萌宠',time:'2019-01-01',caozuo:'预览',caozuo2:'删除'},
					{nameLei:'明星',time:'2019-01-01',caozuo:'预览',caozuo2:'删除'},
					{nameLei:'游戏',time:'2019-01-01',caozuo:'预览',caozuo2:'删除'},
					{nameLei:'萌宠',time:'2019-01-01',caozuo:'预览',caozuo2:'删除'}
				]
			}
		},
		methods:{
			addOne(){
				document.getElementById('pic').click();
				
				var addOneHang = {nameLei:'',time:formatDate(new Date(),'yyyy-MM-dd'),caozuo:'预览',caozuo2:'删除'};
				this.tdList.push(addOneHang);
			},
			
			
			delet(index){
				this.tdList.splice(index,1);
			}
		}
	}
</script>

<style scoped="scoped">
	table{
		font-size: .18rem;
	}
	th,td{
		padding: .1rem .1rem;
		text-align: center;
	}
	table tr:nth-child(even){
    background:#f1e9ff;
}
</style>
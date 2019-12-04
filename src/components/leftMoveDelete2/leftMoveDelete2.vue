<template>
	<div class="delete">
		<div class="slider" v-for="(x,index) in list">
			<div :id="index" class="content" @touchstart='touchStart($event,index)' @touchmove='touchMove($event,index)' @touchend='touchEnd($event,index)'>
				<img :src="x.imgUrl" width="50px" height="50px" />
				<div class="content_item">
					<div style="font-size: 16px;">{{x.noticeTitle}}</div>
					<div style="font-size: 13px;color: gray;">{{x.noticeAuthor}}</div>
				</div>
			</div>
			<div class="remove" ref='remove' @click="deleteItem(index)">删除</div>
			<div class="remove1" ref='remove'>置顶</div>
		</div>
	</div>
</template>

<script>
	import storage from '../../js/storage.js'
	export default {
		data() {
			return {
				startX: 0, //触摸位置
				endX: 0, //结束位置
				moveX: 0, //滑动时的位置
				disX: 0, //移动距离
			}
		},
		created() {},
		mounted() {
			this.init();
		},
		computed:{
			//从vuex中取值
			list: {
				get: function() {
					return this.$store.state.callbackData.data.list;
				},
				set: function() {
				}
			},
		},
		methods: {
			init(){
				var data = {
					url:"static/schoolayl.json",
					dataJson:""
				}
				this.$store.dispatch('useAPI',data);
			},
			touchStart(ev,index) {
				var moveFlag = storage.get("moveFlag");
				if(moveFlag!=undefined && moveFlag!=null && moveFlag!= this.list.length){
					document.getElementById(moveFlag).style.transform = "translateX(0px)";
				}
				
				ev = ev || event
				//tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
				if(ev.touches.length == 1) {
					// 记录开始位置
					this.startX = ev.touches[0].clientX;
				}
			},
			touchMove(ev,index) {
				ev = ev || event;
				//获取删除按钮的宽度，此宽度为滑块左滑的最大距离
				let wd = 140;
				if(ev.touches.length == 1) {
					// 滑动时距离浏览器左侧实时距离
					this.moveX = ev.touches[0].clientX
					//起始位置减去 实时的滑动的距离，得到手指实时偏移距离
					this.disX = this.startX - this.moveX;
					// 如果是向右滑动或者不滑动，不改变滑块的位置
					if(this.disX < 0 || this.disX == 0) {
						document.getElementById(index).style.transform = "translateX(0px)";
						// 大于0，表示左滑了，此时滑块开始滑动 
					} else if(this.disX > 0) {
						document.getElementById(index).style.transform = "translateX(-" + this.disX * 5 + "px)";
						//具体滑动距离我取的是 手指偏移距离*5。
						// 最大也只能等于删除按钮宽度 
						if(this.disX * 5 >= wd) {
							document.getElementById(index).style.transform = "translateX(-" + wd + "px)";
						}
					}
				}
			},
			touchEnd(ev,index) {
				storage.set("moveFlag",index);
				ev = ev || event;
				let wd = 140;
				if(ev.changedTouches.length == 1) {
					let endX = ev.changedTouches[0].clientX;
					this.disX = this.startX - endX;
					//如果距离小于删除按钮一半,强行回到起点
					if((this.disX * 5) < (wd / 2)) {
						document.getElementById(index).style.transform = "translateX(0px)";
					} else {
						//大于一半 滑动到最大值
						document.getElementById(index).style.transform = "translateX(-" + wd + "px)";
					}
				}
			},
			//删除
			deleteItem(index){
				document.getElementById(index).style.transform = "translateX(0px)";
				this.list.splice(index, 1);
			}
		}
	}
</script>

<style scoped="scoped" lang="scss">
	.slider{
		border-bottom: 5px solid #DCDCDC; 
        width: 100%;
        height:70px;
        position: relative;
        user-select: none;
        .content{
        	display: flex;
        	flex-flow: row;
        	align-items: center;
        	padding-left: 10px;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background:white;
            box-shadow: 0 5px 3px #DCDCDC;
            z-index: 100;
             /*设置过渡动画*/
            transition: 0.3s;
            .content_item{
            	flex: 1;
            	display: flex;
            	flex-flow: column;
            	padding-left: 15px;
            }
        }
        .remove{
            position: absolute;
            width:70px;
            height:70px;
            line-height: 70px;
            background:red;
            right: 0;
            top: 0;
            color:#fff;
            text-align: center;
        }
        .remove1{
            position: absolute;
            width:70px;
            height:70px;
            line-height: 70px;
            background:cadetblue;
            right: 70px;
            top: 0;
            color:#fff;
            text-align: center;
        }
    }
</style>
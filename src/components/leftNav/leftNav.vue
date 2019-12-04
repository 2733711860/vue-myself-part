<template>
	<div>
		<div style="display: flex;flex-flow: row;background-color: #409EFF;padding: 10px 20px;justify-content: space-between;">
			<img src="../../../static/imgs/menu.png" width="25px" height="20px" class="left" @click="showLeftNav" />
			<div style="color: white;font-size: 16px;">1111</div>
			<div style="width: 25px;"></div>
		</div>
		
		<div class="leftNav">
		    <span>菜单1</span>
		    <span>菜单2</span>
		    <span>菜单3</span>
		    <span>菜单4</span>
		</div>
		
		<div class="bgDiv" @click="hideNav"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{}
		},
		methods:{
			showLeftNav(){
				var left = $('.left');
			    var bg = $('.bgDiv');
			    var leftNav = $('.leftNav');
			    bg.css({
	                display: "block",
	                transition: "opacity .5s"
	            });
	            leftNav.css({
                    left: "0px",
                    transition: "left 1s"
                });
			},
			hideNav() {
				var left = $('.left');
			    var bg = $('.bgDiv');
			    var leftNav = $('.leftNav');
		        leftNav.css({
		            left: "-70%",
		            transition: "left .5s"
		        });
		        bg.css({
		            display: "none",
		            transition: "display 1s"
		        });
		    }
		}
	}
</script>

<style scoped="scoped">
	span{
	    display: inline-block;
	    width: 100%;
	    height: 50px;
	    line-height: 50px;
	    border-bottom: 1px solid #f5f5f5;
	    text-align: center;
	}
	span:hover{
	    background-color: #f5f5f5;
	}
	
	.bgDiv{
	    width: 100%;
	    height: 100%;
	    background-color: #000;
	    opacity: .5;
	    position:fixed;
	    display: none;
	    z-index: 99;
	    bottom: 0;
	}
	.leftNav{
	    width: 70%;
	    max-width: 400px;
	    height: 100%;
	    background-color: #fff;
	    position: fixed;
	    z-index: 999;
	    top: 0;
	    left: -70%;
	}
</style>
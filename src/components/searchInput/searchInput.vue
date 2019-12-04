<template>
	<div>
		<div class="search-wrapper">
			<div class="input-holder">
				<input type="text" class="search-input" placeholder="Type to search" v-model="searchKay" />
				<button class="search-icon" @click="searchToggle($event)"><span></span></button>
			</div>
			<span class="close" @click="closeSearchToggle($event)"></span>
		</div>
	</div>
</template>

<script>
	import searchInput from '../../js/searchInput.js'
	export default{
		data(){
			return{
				searchKay:'',
			}
		},
		components:{
			searchInput,
		},
		methods:{
			//弹出搜索框
			searchToggle(event){
				let mmm = event.target; //event.target相当于jQuery中的this
				var container = $(mmm).closest('.search-wrapper');
				if(!container.hasClass('active')){
					//弹出搜索框
					searchInput.searchToggle(mmm, event);
				} else {
					//进行搜索
					alert(this.searchKay);
				}
			},
			//关闭搜索框
			closeSearchToggle(event){
				this.searchKay = ''; //关闭搜索框后清空搜索关键字
				let mmm = event.target; //event.target相当于jQuery中的this
				searchInput.closeSearchToggle(mmm, event);
			}
		}
	}
</script>

<style scoped="scoped">
.search-wrapper {
    position: absolute;
}

.search-wrapper .input-holder {
    overflow: hidden;
    height: 50px;
    background: rgba(255,255,255,0);
    border-radius:6px;
    position: relative;
    width:70px;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder {
    border-radius: 50px;
    width:450px;
    background: rgba(0,0,0,0.5);
    -webkit-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .5s cubic-bezier(0.000, 0.105, 0.035, 1.570);
}

.search-wrapper .input-holder .search-input {
    width:100%;
    height: 40px;
    padding:0px 70px 0 20px;
    opacity: 0;
    position: absolute;
    top:-5px;
    left:0px;
    background: transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border:none;
    outline:none;
    font-size: 16px;
    color:#FFF;
    -webkit-transform: translate(0, 60px);
    -moz-transform: translate(0, 60px);
    transform: translate(0, 60px);
    -webkit-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .3s cubic-bezier(0.000, 0.105, 0.035, 1.570);

    -webkit-transition-delay: 0.3s;
    -moz-transition-delay: 0.3s;
    transition-delay: 0.3s;
}
.search-wrapper.active .input-holder .search-input {
    opacity: 1;
    -webkit-transform: translate(0, 10px);
    -moz-transform: translate(0, 10px);
    transform: translate(0, 10px);
}

.search-wrapper .input-holder .search-icon {
    width:50px;
    height:50px;
    border:none;
    border-radius:6px;
    background: #FFF;
    padding:0px;
    outline:none;
    position: relative;
    z-index: 2;
    float:right;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder .search-icon {
    width: 40px;
    height:40px;
    margin: 5px;
    border-radius: 30px;
}
.search-wrapper .input-holder .search-icon span {
    width:22px;
    height:22px;
    display: inline-block;
    vertical-align: middle;
    position:relative;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
    -moz-transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);
    transition: all .4s cubic-bezier(0.650, -0.600, 0.240, 1.650);

}
.search-wrapper.active .input-holder .search-icon span {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.search-wrapper .input-holder .search-icon span::before, .search-wrapper .input-holder .search-icon span::after {
    position: absolute;
    content:'';
}
.search-wrapper .input-holder .search-icon span::before {
    width: 4px;
    height: 11px;
    left: 9px;
    top: 18px;
    border-radius: 2px;
    background: #974BE0;
}
.search-wrapper .input-holder .search-icon span::after {
    width: 14px;
    height: 14px;
    left: 0px;
    top: 0px;
    border-radius: 16px;
    border: 4px solid #974BE0;
}

.search-wrapper .close {
    position: absolute;
    z-index: 1;
    top:10px;
    right:20px;
    width:20px;
    height:20px;
    cursor: pointer;
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    transform: rotate(-180deg);
    -webkit-transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
    -moz-transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
    transition: all .3s cubic-bezier(0.285, -0.450, 0.935, 0.110);
    -webkit-transition-delay: 0.2s;
    -moz-transition-delay: 0.2s;
    transition-delay: 0.2s;
}
.search-wrapper.active .close {
    right:-50px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -moz-transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    transition: all .6s cubic-bezier(0.000, 0.105, 0.035, 1.570);
    -webkit-transition-delay: 0.5s;
    -moz-transition-delay: 0.5s;
    transition-delay: 0.5s;
}
.search-wrapper .close::before, .search-wrapper .close::after {
    position:absolute;
    content:'';
    background: #FFF;
    border-radius: 2px;
}
.search-wrapper .close::before {
    width: 5px;
    height: 25px;
    left: 10px;
    top: 0px;
}
.search-wrapper .close::after {
    width: 25px;
    height: 5px;
    left: 0px;
    top: 10px;
}
</style>
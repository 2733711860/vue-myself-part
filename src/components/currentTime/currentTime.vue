<template>
	<div>
		<div id="clock">
			<p class="date">{{ date }}</p>
			<p class="time">{{ time }}</p>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				time: '',
				date: '',
				week:[
					'星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'
				]
			}
		},
		created:function(){
			var timerID = setInterval(this.updateTime, 1000);
			this.updateTime();
		},
		methods:{
			updateTime() {
				var cd = new Date();
				this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
				this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
			},
			zeroPadding(num, digit) {
				var zero = '';
				for(var i = 0; i < digit; i++) {
					zero += '0';
				}
				return(zero + num).slice(-digit);
			}
		}
	}
</script>

<style scoped="scoped">
	p {
		margin: 0;
		padding: 0;
	}
	
	#clock {
		font-family: 'Share Tech Mono', monospace;
		color: #ffffff;
		text-align: center;
		color: #daf6ff;
		text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
	}
	
	#clock .time {
		letter-spacing: 0.05em;
		font-size: 80px;
		padding: 5px 0;
	}
	
	#clock .date {
		letter-spacing: 0.1em;
		font-size: 24px;
	}
	
	#clock .text {
		letter-spacing: 0.1em;
		font-size: 12px;
		padding: 20px 0 0;
	}
</style>
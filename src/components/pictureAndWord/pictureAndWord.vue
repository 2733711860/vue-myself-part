<!--
	图片翻转成文字
-->
<template>
	<div class="content">
		<div class="card">
			<div class="front" style="background-image: url(../../../static/imgs/2.jpg);width: 300px;height: 400px;background-size: 100% 100%;">
				<p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
			</div>
			<div class="back">
				<div>
					<p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
					<button class="button">Click Here</button>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
</script>

<style scoped="scoped">
	*, *:before, *:after {
  box-sizing: border-box;
}

.content {
  display: flex;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  background-color: paleturquoise;
}

.card {
  color: inherit;
  cursor: pointer;
  width: 300px;
  height: 400px;
  margin: 0.1rem;
  position: relative;
}

.front,
.back {
  display: flex;
  border-radius: 6px;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
}

.front {
  background-size: cover;
  padding: 0.2rem;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  font-family: Poppins, sans-serif;
}
.front:before {
  position: absolute;
  display: block;
  content: '';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  opacity: .25;
  z-index: -1;
}
.card:hover .front {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .front {
  transform: rotateY(-180deg);
}

.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
}
.card:hover .back {
  transform: rotateY(0deg);
}
.card:nth-child(even) .back {
  transform: rotateY(180deg);
}
.card:nth-child(even):hover .back {
  transform: rotateY(0deg);
}

.button {
	outline: none;
  transform: translateZ(40px);
  cursor: pointer;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  font-weight: bold;
  color: #fff;
  padding: .5em 1em;
  border-radius: 100px;
  font: inherit;
  background: linear-gradient(135deg, #1a9be6, #1a57e6);
  border: none;
  position: relative;
  transform-style: preserve-3d;
  transition: 300ms ease;
}
.button:hover {
  transform: translateZ(55px);
}
</style>
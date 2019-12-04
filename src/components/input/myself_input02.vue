<template>
	<div>
		<input type="text" placeholder="用户名" name="username" style="width: 200px;height: 30px;padding: 0 8px;" />
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	input::-webkit-input-placeholder {
		color: #999;
		-webkit-transition: color.5s;
	}
	
	input:focus::-webkit-input-placeholder,
	input:hover::-webkit-input-placeholder {
		color: #c2c2c2;
		-webkit-transition: color.5s;
	}
</style>
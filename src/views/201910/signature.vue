<template>
	<div>
		<div id="signature" style="width:100%;text-align:center;"></div>
		<el-button @click="clear">重置</el-button>
		<el-button @click="save">确定</el-button>
		<img :src="signSrc" id="img" />
	</div>
</template>

<script>
export default {
  data () {
    return {
      signSrc: ''
    }
  },
  mounted(){
    $('#signature').jSignature({color: '#f00', width: 300, height: 200})
  },
  methods: {
    clear () {
      $('#signature').jSignature('clear')
    },
    save () {
      var sig=$('#signature')
      this.signSrc = 'data:' + sig.jSignature('getData')
    }
  }
}
</script>

<style>
</style>
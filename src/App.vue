<template>
  <div id="app">
  	<leftNav v-if="$route.meta.leftNav"></leftNav>
    <router-view v-if="isRouterAlive"></router-view>
    <bottomNav v-if="$route.meta.bottomNav"></bottomNav>
    <animation></animation>
  </div>
</template>

<script>
	import leftNav from './components/leftNav/leftNav.vue'
	import bottomNav from './components/bottomNav/bottomNav.vue'
	import animation from './components/animation/animation.vue'
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  components: {
  	leftNav,bottomNav,animation
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>

<style>
#app {
		padding: 0;
		margin: 0;
		font-size: 15px;
		display: flex;	/*使用flex，以及页面中的overflow：auto实现fixed效果*/
		flex-flow: column;
		justify-content: space-between; /*实现底部导航栏居于底部*/
	}
	.mint-indicator-mask{
		z-index: 999;
	}
</style>

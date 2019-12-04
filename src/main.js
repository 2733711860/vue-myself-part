// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import $ from './js/jquery-vendor.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import  'amfe-flexible'
import lrz from 'lrz'	//图片压缩
import store from './store/store'//引入store

import storage from '../static/js/storage.js'
window.cache = storage

import utils from './js'
window.utils = utils

//签名
import '../static/js/jSignature.min.noconflict'

import '../static/js/kiner-swiper-panel.min.js'

//引入axios
import axios from 'axios'
Vue.prototype.$axios = axios

//mobiscroll滚动相关，包括底部弹出
import '../static/css/mobiscroll.min.css'
import '../static/js/mobiscroll.custom-2.17.1.min'

//引入cube-ui
import Cube from 'cube-ui'
Vue.use(Cube)

// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css'
Vue.use(Vant)

//刮奖
import vueEaser from "vue-eraser";
Vue.use(vueEaser)

/*图片预览*/
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)

/*图片预览更好用*/
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)


Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})

Vue.use(VueAwesomeSwiper)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  render: h => h(App),
  components: { App },
  template: '<App/>'
})

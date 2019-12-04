import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HelloWorld'
import login from '../views/login'
import leftNavPage from '../views/leftNavPage'
import gestureUnlockPage from '../views/gestureUnlockPage' //手势解锁页面
import leftMoveDelete from '../views/leftMoveDelete' //左滑删除页面
import leftMoveDelete2 from '../views/leftMoveDelete2' //左滑删除页面2
import partCommunication from '../views/partCommunication' //组件传值
import chooseAddressPage from '../views/chooseAddressPage' //地址选择页面
import pictureOperation from '../views/pictureOperation' //图片处理
import windowRoller from '../views/windowRoller' //视窗滚轮
import mobiscroll_test from '../views/mobiscroll_test' //底部弹出mobiscroll
import componentCommunication from '../views/componentCommunication' //组件通信
import pictureLazyLoad from '../views/pictureLazyLoad' //图片懒加载
import functionEncapsulation from '../views/functionEncapsulation' //封装方法
import cssAnimation from '../views/cssAnimation' //css3动画
import progressBar from '../views/progressBar' //进度条
import fileUpload from '../views/fileUpload' //文件上传
import navContentPage from '../views/navContentPage' //导航与内容对应
import superTable from '../views/superTable' //超级表格
import freshLoad from '../views/freshLoad' //刷新加载
import guaJiang from '../views/201907/guaJiang' //刮奖
import pictureYuLan from '../views/201907/pictureYuLan' //图片预览
import select from '../views/201907/select' //select组件
import selectAll from '../views/201907/selectAll' //全选
import uploadPreview from '../views/201907/uploadPreview' //上传预览
import countdown from '../views/201907/countdown' //倒计时
import draggable from '../views/201907/draggable' //拖拽移动
import addTable from '../views/201908/addTable' //表格添加行
import treePage from '../views/201909/treePage' //表格添加行
import signature from '../views/201910/signature' //签名
import elementPage from '../views/201910/elementPage' //elementui
import validatePage from '../views/201911/validatePage' //validatePage
import selfTabPage from '../views/201911/selfTabPage' //selfTabPage

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/leftNavPage',
      name: 'leftNavPage',
      component: leftNavPage,
      meta:{
      	leftNav:true,
      	bottomNav:true,
      }
    },
    {
      path: '/gestureUnlockPage',
      name: 'gestureUnlockPage',
      component: gestureUnlockPage
    },
    {
      path: '/leftMoveDelete',
      name: 'leftMoveDelete',
      component: leftMoveDelete
    },
    {
      path: '/leftMoveDelete2',
      name: 'leftMoveDelete2',
      component: leftMoveDelete2
    },
    {
      path: '/partCommunication',
      name: 'partCommunication',
      component: partCommunication
    },
    {
      path: '/chooseAddressPage',
      name: 'chooseAddressPage',
      component: chooseAddressPage
    },
    {
      path: '/pictureOperation',
      name: 'pictureOperation',
      component: pictureOperation
    },
    {
      path: '/windowRoller',
      name: 'windowRoller',
      component: windowRoller
    },
    {
      path: '/mobiscroll_test',
      name: 'mobiscroll_test',
      component: mobiscroll_test
    },
    {
      path: '/componentCommunication',
      name: 'componentCommunication',
      component: componentCommunication
    },
    {
      path: '/pictureLazyLoad',
      name: 'pictureLazyLoad',
      component: pictureLazyLoad
    },
    {
      path: '/functionEncapsulation',
      name: 'functionEncapsulation',
      component: functionEncapsulation
    },
    {
      path: '/cssAnimation',
      name: 'cssAnimation',
      component: cssAnimation
    },
    {
      path: '/progressBar',
      name: 'progressBar',
      component: progressBar
    },
    {
      path: '/fileUpload',
      name: 'fileUpload',
      component: fileUpload
    },
    {
      path: '/navContentPage',
      name: 'navContentPage',
      component: navContentPage
    },
    {
      path: '/superTable',
      name: 'superTable',
      component: superTable
    },
    {
      path: '/freshLoad',
      name: 'freshLoad',
      component: freshLoad
    },
    {
      path: '/guaJiang',
      name: 'guaJiang',
      component: guaJiang
    },
    {
      path: '/pictureYuLan',
      name: 'pictureYuLan',
      component: pictureYuLan
    },
    {
      path: '/select',
      name: 'select',
      component: select
    },
    {
      path: '/selectAll',
      name: 'selectAll',
      component: selectAll
    },
    {
      path: '/uploadPreview',
      name: 'uploadPreview',
      component: uploadPreview
    },
    {
      path: '/countdown',
      name: 'countdown',
      component: countdown
    },
    {
      path: '/draggable',
      name: 'draggable',
      component: draggable
    },
    {
      path: '/addTable',
      name: 'addTable',
      component: addTable
    },
    {
      path: '/treePage',
      name: 'treePage',
      component: treePage
    },
    {
      path: '/signature',
      name: 'signature',
      component: signature
    },
    {
      path: '/elementPage',
      name: 'elementPage',
      component: elementPage
    },
    {
      path: '/validatePage',
      name: 'validatePage',
      component: validatePage
    },
    {
      path: '/selfTabPage',
      name: 'selfTabPage',
      component: selfTabPage
    }
  ]
})

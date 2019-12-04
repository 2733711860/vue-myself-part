<template>
  <div>
    	<el-input placeholder="请输入内容" v-model="searchValue" class="input-with-select">
        <el-button @click="tosearch()" slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <div style="height: .5rem;"></div>
    <!--一级-->
    <div v-for="(xx,index1) in dataList2" :key="'1'+index1">
      <div class="flexflow flexBtween oneLine borderBottom" @click="chooseOne(xx)">
        <div class="flex_1 height02">{{ xx.name }}</div>
        <div class="flexflow cencen">
        	<div class="height02 marright">{{ xx.code }}</div>
        	<div><img :src="xx.isOpen ? bottomSrc : rightSrc" style="width: .2rem;height: .2rem;" /></div>
        </div>
      </div>
      <!--二级-->
      <div v-if="xx.children && xx.isOpen" v-for="(yy,index2) in xx.children" :key="'2'+index2">
        <div class="flexflow flexBtween oneLine marleft borderBottom" @click="chooseOne(yy)">
          <div class="flex_1 height02">{{ yy.name }}</div>
          <div class="flexflow cencen">
          	<div class="height02 marright">{{ yy.code }}</div>
          	<div><img :src="yy.isOpen ? bottomSrc : rightSrc" style="width: .2rem;height: .2rem;" /></div>
          </div>
        </div>
        <!--三级-->
        <div v-if="yy.children && yy.isOpen" v-for="(zz,index3) in yy.children" :key="'3'+index3">
          <div class="flexflow flexBtween oneLine marleft2 borderBottom" @click="chooseOne(zz)">
            <div class="flex_1 height02">{{ zz.name }}</div>
            <div class="flexflow cencen">
            	<div class="height02 marright">{{ zz.code }}</div>
            	<div><img :src="zz.isOpen ? bottomSrc : rightSrc" style="width: .2rem;height: .2rem;" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="height: .5rem;"></div>
    <el-input v-model="chooseValue"></el-input>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rightSrc: '../../../static/img/rightGray.png',
      bottomSrc: '../../../static/img/bottom.png',
      chooseValue: '',
      searchValue: '',
      dataList2: [],
      dataList: [
        {
          name: '唐朝',
          code: '01',
          isOpen: false,
          children: [
            {
              name: '李白',
              code: '0101',
              isOpen: false,
              children: [
                {
                  name: '将进酒',
                  code: '010101',
                  isOpen: false
                }
              ]
            },
            {
              name: '白居易',
              code: '0102',
              isOpen: false,
              children: [
                {
                  name: '琵琶行',
                  code: '010201',
                  isOpen: false
                }
              ]
            }
          ]
        },
        {
          name: '宋朝',
          code: '02',
          isOpen: false,
          children: [
            {
              name: '苏轼',
              code: '0201',
              isOpen: false,
              children: [
                {
                  name: '定风波',
                  code: '020101',
                  isOpen: false
                }
              ]
            },
            {
              name: '柳永',
              code: '0202',
              isOpen: false
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.dataList2 = this.dataList
    window.cache.set('listt', this.dataList)
  },
  methods: {
    // 是否展开下一级,最后一级选择一个
    chooseOne (item) {
      if (item.hasOwnProperty('children')) { // 有下一级展开
        item.isOpen = !item.isOpen
      } else { // 没有选择
        this.chooseValue = item.name
      }
    },
    // 查询按钮
    tosearch () {
      let _this = this
      let listt = window.cache.get('listt')
      console.log(listt)
      var filter = listt.filter(function (item) {
        return _this.searchFun(item, _this.searchValue)
      })
      console.log(filter)
      this.dataList2 = filter
    },
    // 过滤
    searchFun (item, query) {
      let _this = this
      if (item.name.indexOf(query) > -1) {
        return true
      }
      if (item.hasOwnProperty('children')) {
        item.children = item.children.filter(function (child) {
          if (!child.hasOwnProperty('children')) {
            return child.name.indexOf(query) > -1
          } else if (child.hasOwnProperty('children')) {
          	debugger
            _this.searchFun(child)
          }
        })
        if (item.children.length > 0) {
          return true
        }
      } else {
        return item.name.indexOf(query) > -1
      }
    },
  }
}
</script>

<style scoped="scoped">
  .flexflow{
  	display: flex;
  	flex-flow: row;
  }
  .flexBtween{
  	justify-content: space-between;
  }
  .height02{
  	height: .2rem;
  	line-height: .2rem;
  }
  .cencen{
  	justify-content: center;
  	align-content: center;
  }
  .flex_1{
  	flex: 1;
  }
  .oneLine{
  	padding: .1rem;
  }
  .marleft{
  	margin-left: .2rem;
  }
  .marleft2{
  	margin-left: .4rem;
  }
  .marright{
  	margin-right: .1rem;
  }
  .borderBottom{
  	border-bottom: 1px solid #F1F1F1;
  }
</style>
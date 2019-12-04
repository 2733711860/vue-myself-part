<!--
	拖拽移动(父组件传个数组dataList即可)
	npm install vuedraggable
	import draggable from 'vuedraggable'
-->
<template>
  <div class="row">
    <div class="col-8">
      <h3 style="height: 40px;line-height: 40px;font-weight: bold;">可拖动的表</h3>

      <table class="dragTable">
        <thead>
          <tr>
            <th v-for="xx in thList">{{xx}}</th>
          </tr>
        </thead>
        <draggable v-model="list" tag="tbody">
          <tr v-for="item in list" :key="item.name">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.sport }}</td>
          </tr>
        </draggable>
      </table>
    </div>

  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "table-example",
  display: "Table",
  order: 8,
  components: {
    draggable
  },
  props:{
  	dataListTwo:{
  		type: Array
  	},
  	thList:{
  		type: Array
  	}
  },
  data() {
    return {
    	list:[],
    };
  },
  mounted(){
  	this.list = this.dataListTwo;
  }
};
</script>
<style scoped>
	.dragTable{
		width: 100%;
		text-align: center;
	}
	.dragTable tr{
		height: 40px;
	}
	.dragTable tr td,th{
		vertical-align: middle !important;
		border: 1px solid #454d55;
	}
	.dragTable th{
		background-color: #343a40;
	}
</style>
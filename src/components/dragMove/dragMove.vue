<!--
	拖拽移动(父组件传个数组dataList即可)
	npm install vuedraggable
	import draggable from 'vuedraggable'
-->
<template>
  <div class="row">
    <div class="col-2">
      <el-button @click="sort">
        	原始订单
      </el-button>
    </div>

    <div>
      <h1 style="height: 40px;line-height: 40px;font-weight: bold;">过度</h1>
      <draggable
        class="list-group"
        tag="ul"
        v-model="list"
        v-bind="dragOptions"
        @start="drag = true"
        @end="drag = false"
      >
        <transition-group type="transition" :name="!drag ? 'flip-list' : null">
          <li
            class="list-group-item"
            v-for="element in list"
            :key="element.order"
          >
            <i
              :class="
                element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'
              "
              @click="element.fixed = !element.fixed"
              aria-hidden="true"
            ></i>
            {{ element.name }}
          </li>
        </transition-group>
      </draggable>
    </div>

  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {
    draggable
  },
  data() {
    return {
      list:[],
      drag: false
    };
  },
  props:{
  	dataList:{
  		type: Array
  	},
  },
  mounted(){
  	this.list = this.dataList.map((name, index) => {
  		return { name, order: index + 1 };
  	})
  	console.log(this.list)
  },
  methods: {
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    }
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style scoped="scoped">
.button {
  margin-top: 35px;
}
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  background-color: palegreen;
  margin-top: 10px;
}
.list-group-item i {
  cursor: pointer;
}
</style>
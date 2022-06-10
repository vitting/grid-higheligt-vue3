<script setup lang="ts">
import RawDisplayer from "./components/RawDisplayer.vue";
import { uid } from 'uid';
import { ref } from "vue";
import draggable from 'vuedraggable'
import GridComponent from './components/Input/GridComponent.vue'
const list1 = ref(["TextComponent", "NumberComponent", "DateComponent"])
const list2 = ref({
  rows: [
    {
      dirty: false,
      id: uid(),
      cols: [
        { id: uid(), items: [] },
        { id: uid(), items: [] }
      ]
    }
  ]
})


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const moveHandler = (evt: any) => {
  console.log(evt.relatedContext)
  console.log(evt.relatedContext.list)
  if (evt.relatedContext.list.length != 0) {
    return false
  }
  // return false
}

const changeHandler = (evt) => {
  console.log("Change Handler", evt)
}

//TODO: Vi skal lave en udgave hvor vi får et object ind og sender et object retur med et id så vi kan lave en item-key

const cloneElement = (element: string) => {
  console.log(element)
  return element
  // return {
  //   id: uid(),
  //   items: [element]
  // }
}

const mouseenterHandler = () => {
  console.log("mouseenterHandler")
  //  const lastElement = list2.value.rows[list2.value.rows.length - 1];
  list2.value.rows.push({
    dirty: false,
    id: uid(),
    cols: [
      { id: uid(), items: [] },
      { id: uid(), items: [] }
    ]
  })
}
</script>

<template>
  <main>
    <GridComponent :cols="2"></GridComponent>
    <h1>Grid</h1>
    <div class="page-grid">
      <div>
        <div>
          Column
        </div>
        <draggable :list="list1" :clone="cloneElement" :group="{ name: 'componentList', pull: 'clone', put: false }"
          :move="moveHandler" @change="changeHandler" >
          <template #item="{ element }">
            <component :is="element"></component>
          </template>

        </draggable>
      </div>

      <div class="dropzone">
        <div v-for="row in list2.rows" :key="row.id" class="grid-container">
          <draggable v-for="col in row.cols" :key="col.id" :list="col.items" class="grid-item" group="componentList">
            <template #item="{ element }">
              <component :is="element" v-bind="{ disabled: false }"></component>
            </template>
          </draggable>
        </div>
        <div @mouseenter="mouseenterHandler" class="dropzone-extender"></div>
      </div>
      <RawDisplayer :value="list1" title="List 1" />
      <RawDisplayer :value="list2" title="List 2" />
    </div>

  </main>
</template>

<style>
.page-grid {
  display: grid;
  grid-template-columns: 200px 1fr 200px 200px;
  column-gap: 1rem;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1px;
  margin-bottom: 1px;
}

.grid-item {
  min-height: 2rem;
  background-color: rgb(230, 242, 255);
  padding: 5px;
}

/* .grid-item:hover {
  border: 1px solid darkgrey;
} */

.dropzone-extender {
  height: 2rem;
  background-color: rgb(255, 255, 225);

}
</style>

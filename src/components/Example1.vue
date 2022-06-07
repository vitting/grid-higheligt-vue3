<script setup lang="ts">
import RawDisplayer from "./components/RawDisplayer.vue";
import { uid } from 'uid';
import GridContainer from "./components/GridContainer.vue";
import { ref } from "vue";
import draggable from 'vuedraggable'
const list1 = ref(["Component1", "Component2", "Component3"])
const list2 = ref({
  rows: [
    {
      dirty: true,
      index: uid(),
      items: [
        {id: uid(), text: "items1"},
        {id: uid(), text: "items2"}
      ]
    },
    {
      dirty: true,
      index: uid(),
      items: [
        {id: uid(), text: "items1"},
        {id: uid(), text: "items2"}
      ]
    }
  ]
})
const drag = ref(true)
const drag2 = ref(true)

const mouseOverHandler = () => {
  console.log("MOUSE OVER")
}

const dragHandler = () => {
  console.log("DRAGHANDLER")
}

const dragHandler2 = () => {
  console.log("DRAGHANDLER2")
}

const moveHandler = () => {
  console.log("MOVE HANDLER")
}

const changeHandler = () => {
  console.log("Change Handler")
}

const cloneElement = (element) => {
  console.log(element)
  return {
    id: uid(),
    text: element
  }
}

const addRow = () => {
    const lastElement = list2.value.rows[list2.value.rows.length -1];
    if (lastElement.dirty) {
      list2.value.rows.push({
        index: uid(),
        dirty: false,
        items: [{id: uid(), text:""}, {id: uid(), text:""}]
      })
    }
}
</script>

<template>
  <main>
    <h1>Grid</h1>
    <div class="page-grid">
      <div>
        <div>
          Column
        </div>
        <draggable v-model="list1" @start="dragHandler" @end="dragHandler" :clone="cloneElement"
          :group="{ name: 'people', pull: 'clone', put: false }" :move="moveHandler" @change="changeHandler">
          <template #item="{ element }">
            <div>{{ element }}</div>
          </template>

        </draggable>
      </div>

      <div @mouseover="addRow">
      <draggable v-model="list2.rows" item-key="index">

        <template #item="{ element }">
            <draggable v-model="element.items" item-key="id" tag="grid-container" class="grid-container" group="people">
              <template #item="{ element }">
                <div class="grid-item">{{element.text}}</div>
              </template>
            </draggable>

        </template>
      </draggable>
      </div>
      <RawDisplayer :value="list1" title="List 1" />
      <RawDisplayer :value="list2" title="List 1" />
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
  height: 2rem;
  background-color: rgb(228, 228, 228);
}

.grid-item:hover {
  border: 1px solid darkgrey;
}
</style>

<script setup lang="ts">
import { uid } from 'uid';
import draggable from 'vuedraggable'
import { ref } from "vue";


const components = ref([
  {
    categoryName: "Category 1",
    components: [
      {
        id: 1,
        name: "DateComponent",
        description: "Description or tooltip for DateComponent"
      },
      {
        id: 2,
        name: "NumberComponent",
        description: "Description or tooltip for NumberComponent"
      },
      {
        id: 3,
        name: "TextComponent",
        description: "Description or tooltip for TextComponent"
      }
    ]
  },
  {
    categoryName: "Category 2",
    components: [
      {
        id: 4,
        name: "DateComponent",
        description: "Description or tooltip for DateComponent"
      },
      {
        id: 5,
        name: "NumberComponent",
        description: "Description or tooltip for NumberComponent"
      },
      {
        id: 6,
        name: "TextComponent",
        description: "Description or tooltip for TextComponent"
      }
    ]
  }
])

const formComponents = ref([])

const componentProperties = ref("")

const cloneElement = (element: string) => {
  console.log(element)
  return element
  // return {
  //   id: uid(),
  //   items: [element]
  // }
}

const moveHandler = (evt: any) => {
  console.log(evt.relatedContext)
  console.log(evt.relatedContext.list)
  // if (evt.relatedContext.list.length != 0) {
  //   return false
  // }
  // return false
}

const componentPropertyHandler = (element) => {
  console.log(element)
  componentProperties.value = `${element.name}Properties`
}
</script>

<template>
  <div class="container">
    <div class="components">
      <div class="category" v-for="category in components" :key="category.categoryName">
        <h3>{{ category.categoryName }}</h3>
        <draggable :list="category.components" :clone="cloneElement"
          :group="{ name: 'componentList', pull: 'clone', put: false }" :move="moveHandler" :sort="false">
          <template #item="{ element }">
            <component :is="element.name" class="component"></component>
          </template>
        </draggable>
      </div>
    </div>
    <div class="form">
      <div>
        <draggable :list="formComponents" :group="{name: 'componentList'}" class="drop-zone">
        <template #item="{ element }">
          <div>
            <component :is="element.name" class="component" @click="componentPropertyHandler(element)"></component>
          </div>
        </template>
        </draggable>
      </div>
    </div>
    <div class="properties">
        <component :is="componentProperties"></component>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}
</style>

<style scoped>
.container {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  /* grid-auto-rows: minmax(min-content, max-content); */
}

.container .components {
  background-color: rgb(245, 242, 255);
  /* min-height: 100vh; */
}

.container .components .category {
  margin-bottom: 10px;
}

.container .components .category h3 {
  margin-bottom: 5px;
}

.container .components .component {
  border: 1px solid rgb(207, 206, 206);
  margin: 5px;
  padding: 5px;
}

.container .form {
  background-color: rgb(249, 251, 220);
}

.container .form .drop-zone {
  background-color: #fff;
  min-height: 100px;
  margin: 10px;
  padding: 10px;
}

.container .form .drop-zone .component {
  margin: 10px;
  padding: 1rem;
}

.container .form .drop-zone .component:hover {
  border: 1px solid rgb(194, 194, 194);
  cursor: pointer;
}

.container .properties {
  background-color: rgb(255, 217, 217);
}
</style>
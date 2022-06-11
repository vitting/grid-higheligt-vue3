<script setup lang="ts">
import { uid } from 'uid';
import draggable from 'vuedraggable'
import { ref, watch } from "vue";


const components = ref([
  {
    categoryName: "Category 1",
    components: [
      {
        id: uid(),
        name: "DateComponent",
        description: "Description or tooltip for DateComponent"
      },
      {
        id: uid(),
        name: "NumberComponent",
        description: "Description or tooltip for NumberComponent"
      },
      {
        id: uid(),
        name: "TextComponent",
        description: "Description or tooltip for TextComponent"
      }
    ]
  },
  {
    categoryName: "Category 2",
    components: [
      {
        id: uid(),
        name: "SelectComponent",
        description: "Description or tooltip for SelectComponent"
      },
    ]
  }
])

const formComponents = ref([])

const componentProperties = ref("")

const formComponentSelected = ref("")

const modelValues = ref({
  label: "labelnavn",
  minLength: 0,
  maxLength: 10
})

const cloneElement = (element: any) => {
  console.log(element)
  // return element
  return {
    id: `c${uid()}`,
    name: element.name
  }
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
  formComponentSelected.value = element.id
  componentProperties.value = `${element.name}Properties`
}

watch(
  () => modelValues.value,
  (newValue, oldValue) => {
    console.log(newValue)
  },
  {
    deep: true
  }
)

</script>

<template>
  <div class="container">
    <div class="components">
      <div class="category" v-for="category in components" :key="category.categoryName">
        <h3>{{ category.categoryName }}</h3>
        <draggable :list="category.components" :clone="cloneElement" item-key="id"
          :group="{ name: 'componentList', pull: 'clone', put: false }" :move="moveHandler" :sort="false">
          <template #item="{ element }">
            <component :is="element.name" class="component"></component>
          </template>
        </draggable>
      </div>
    </div>
    <div class="form">
      <div>
        <draggable :list="formComponents" :group="{ name: 'componentList' }" class="drop-zone" item-key="id">
          <template #item="{ element }">
            <div>
              <component :is="element.name" class="component" @click="componentPropertyHandler(element)"
                v-bind="{ disabled: false }"></component>
            </div>
          </template>
        </draggable>
      </div>
    </div>
    <div class="properties">
      <component :is="componentProperties" v-model="modelValues"></component>
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
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr;
  /* grid-auto-rows: minmax(min-content, max-content); */
}

.container .components {
  background-color: rgb(251, 250, 255);
  padding: 1rem;
}

.container .components .category {
  margin-bottom: 10px;
}

.container .components .category h3 {
  margin-bottom: 5px;
}

.container .components .component {
  border: 1px solid rgb(196, 217, 255);
  margin: 5px;
  padding: 5px;
  border-radius: 4px;
}

.container .form {
  background-color: rgb(254, 255, 249);
}

.container .form .drop-zone {
  border: 1px solid transparent;
  background-color: rgb(255, 255, 255);
  min-height: 100px;
  /* margin: 10px; */
  padding: 10px;
}

.container .form .drop-zone:hover {
  border: 1px solid rgb(196, 217, 255);
}

.container .form .drop-zone .component {
  margin: 10px;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 4px;
}

.container .form .drop-zone .component:hover {
  border: 1px solid rgb(196, 217, 255);
  cursor: pointer;
}

.container .properties {
  background-color: rgb(251, 250, 255);
  /* margin: 10px; */
  padding: 1rem;
}

.selected {
  border: 1px solid black;
}
</style>
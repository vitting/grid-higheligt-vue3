<script setup lang="ts">
import { uid } from 'uid';
import { ref, type Ref } from "vue";
import FormBuilder from "./components/FormBuilder.vue";
import { useFormBuilderStore } from "./stores/form-builder.store";
import type { Category } from "./types/form-builder.types";
const components:Ref<Category[]> = ref([
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

const formBuilderStore = useFormBuilderStore()

formBuilderStore.categoryList = components.value;

const showProperties = ref(false)
</script>

<template>
  <!-- <FormBuilder></FormBuilder>       -->
  <div class="container">
    <div class="component-container">
    <div class="component-actions">
        <button @click="showProperties = !showProperties">Test</button>
    </div>
    <Transition name="slide">
    <div class="component" v-show="!showProperties">Dette er komponenten</div>
    </Transition>
    <Transition name="slide">
    <div class="component-properties" v-show="showProperties">
        <div>
            Dette er properties
        </div>
        <div>
            <input type="text">
        </div>
        <div>
            <input type="text">
        </div>
    </div>
    </Transition>
  </div>
  </div>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  height: 0;
}

* {
  margin: 0;
}

html,
body,
#app {
  height: 100%;
}

.component-actions {
    background-color: lightsalmon;
}

.component-container {
    overflow: hidden;
    border: 1px solid black;
}

.component {
    background-color: lightblue;
}

.component-properties {
    background-color: lightcyan;
}

.container {
    width: 700px;
    margin: 0 auto;

}
</style>

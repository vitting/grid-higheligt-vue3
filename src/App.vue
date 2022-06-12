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
</script>

<template>
  <FormBuilder></FormBuilder>      
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

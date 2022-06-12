<script setup lang="ts">
import { uid } from 'uid';
import { ref, watch } from "vue";
import FormBuilderComponents from "./FormBuilderComponents.vue";
import FormBuilderDropZone from "./FormBuilderDropZone.vue";
import FormBuilderProperties from "./FormBuilderProperties.vue";


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

const componentProperties = ref("")

const modelValues = ref({
    label: "labelnavn",
    minLength: 0,
    maxLength: 10
})



const componentPropertyHandler = (element: string) => {
    componentProperties.value = element
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
        <FormBuilderComponents :components="components"></FormBuilderComponents>
        <FormBuilderDropZone @clickcomponent="componentPropertyHandler($event)"></FormBuilderDropZone>
        <FormBuilderProperties :component-properties="componentProperties"></FormBuilderProperties>
    </div>
</template>

<style scoped>
.container {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr;
}

</style>
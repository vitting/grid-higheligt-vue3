<script setup lang="ts">
import { uid } from 'uid';
import draggable from 'vuedraggable'
import type {Category} from "@/types/form-builder.types"

defineProps<{components: Category[]}>()

const moveHandler = (evt: any) => {
    console.log(evt.relatedContext)
    console.log(evt.relatedContext.list)
    // if (evt.relatedContext.list.length != 0) {
    //   return false
    // }
    // return false
}

const cloneElement = (element: any) => {
    console.log(element)
    // return element
    return {
        id: `c${uid()}`,
        name: element.name
    }
}

</script>

<template>
    <div class="components">
        <div class="category" v-for="category in components" :key="category.categoryName">
            <h3>{{ category.categoryName }}</h3>
            <draggable :list="category.components" :clone="cloneElement" item-key="id"
                :group="{ name: 'componentList', pull: 'clone', put: false }" :move="moveHandler" :sort="false">
                <template #item="{ element }">
                    <component :is="element.name" class="component" :title="element.description"></component>
                </template>
            </draggable>
        </div>
    </div>
</template>

<style scoped>
.components {
    background-color: rgb(251, 250, 255);
    padding: 1rem;
}

.components .category {
    margin-bottom: 10px;
}

.components .category h3 {
    margin-bottom: 5px;
}

.components .component {
    border: 1px solid rgb(196, 217, 255);
    margin: 5px;
    padding: 5px;
    border-radius: 4px;
}
</style>
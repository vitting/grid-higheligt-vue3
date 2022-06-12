<script setup lang="ts">
import { uid } from 'uid';
import draggable from 'vuedraggable'
import type { Category } from "@/types/form-builder.types"
import { ref, toRef } from "vue";

defineProps<{ components: Category[] }>()

const switchValue = ref(false)
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
        <div class="switch">
            <ui-form-field>
                <ui-switch v-model="switchValue"></ui-switch>
                <label>Show as Tile</label>
            </ui-form-field>
        </div>
        <div class="category" v-for="category in components" :key="category.categoryName">
            <h3>{{ category.categoryName }}</h3>
            <draggable :list="category.components" :clone="cloneElement" item-key="id" :class="{ 'tile-grid': switchValue }"
                :group="{ name: 'componentList', pull: 'clone', put: false }" :move="moveHandler" :sort="false">
                <template #item="{ element }">
                    <div>
                        <component v-if="!switchValue" :is="element.name" class="component" :title="element.description">
                        </component>
                        <div v-else class="tile-container">
                            <ui-card>
                                <ui-card-content>
                                    <div class="tile">
                                        <ui-icon :size="18">keyboard</ui-icon>
                                        {{ element.name }}
                                    </div>
                                </ui-card-content>
                            </ui-card>
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
    </div>
</template>

<style scoped>
.switch {
    display: flex;
    justify-content: end;
}

.tile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.tile-container {
    margin-bottom: 5px;
    margin-right: 5px;
}

.tile {
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 0.8em;
}

.tile>* {
    margin-right: 5px;

}

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
<script setup lang="ts">
import { ref } from "vue";
import draggable from 'vuedraggable'

defineProps({
    cols: {
        type: Number,
        required: true
    }
})
const items = ref([])
</script>

<template>
    <div class="grid-container">
        <draggable v-for="(index) in cols" :key="index" :list="items" class="grid-item" group="componentList">
            <template #item="{ element }">
                <component :is="element" v-bind="{ disabled: false }"></component>
            </template>
        </draggable>
    </div>
</template>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(v-bind(cols), 1fr);
    gap: 1px;
    margin-bottom: 1px;
}

.grid-item {
    min-height: 2rem;
    background-color: rgb(230, 242, 255);
    padding: 5px;
}
</style>
<script setup lang="ts">import { ref } from "vue";

defineProps({
    disabled: {
        type: Boolean,
        required: false,
        default: true
    }
})

const valuesForSelect = ref([{ label: "Option 1", value: 0 }, { label: "Option 2", value: 1 }])
</script>

<template>
    <div>
        <ui-select outlined :disabled="disabled" :options="valuesForSelect" fullwidth>
            SelectComponent
        </ui-select>
    </div>
</template>

<style scoped>
</style>
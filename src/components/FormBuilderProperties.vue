<script setup lang="ts">
import { ref, toRef } from "vue";

const props = defineProps<{
    componentProperties: string;
}>()

const properties = toRef(props, "componentProperties")
const modelValues = ref({
    label: "labelnavn",
    minLength: 0,
    maxLength: 10
})

</script>

<template>
    <div class="properties">
        <component :is="properties" v-model="modelValues"></component>
    </div>
</template>


<style scoped>
.properties {
    background-color: rgb(251, 250, 255);
    /* margin: 10px; */
    padding: 1rem;
}
</style>
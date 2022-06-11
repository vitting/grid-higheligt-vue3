<script setup lang="ts">
    defineProps({
        disabled: {
            type: Boolean,
            required: false,
            default: true
        }
    })
</script>

<template>
    <div>
        <ui-textfield :type="1" inputType="date" fullwidth :disabled="disabled">DateInput</ui-textfield>
    </div>
</template>

<style scoped>

</style>
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
        <ui-textfield :type="1" fullwidth :disabled="disabled">TextInput</ui-textfield>
    </div>
</template>

<style scoped>
</style>
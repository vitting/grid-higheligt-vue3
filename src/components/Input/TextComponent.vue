<script setup lang="ts">
import WrapperComponent from "@/components/WrapperComponent.vue"
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
        <WrapperComponent>
            <ui-textfield :type="1" fullwidth :disabled="disabled">TextInput</ui-textfield>
        </WrapperComponent>
    </div>
</template>

<style scoped>
</style>
<script setup lang="ts">
import { toRefs } from "vue";

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const data = toRefs(props.modelValue)

const onChangeHandler = (el) => {
    emits('update:modelValue', props.modelValue)
}
</script>

<template>
    <div>
        <h2>TextInput Properties</h2>
        <div class="fields">
            <h4>Standard</h4>
            <div>
                <ui-textfield :model-value="data.label" @update:model-value="onChangeHandler($event)" :type="1" fullwidth>Label</ui-textfield>
            </div>
            <h4>Validering</h4>
            <div>
                <ui-form-field>
                    <ui-checkbox></ui-checkbox>
                    <label>Skal udfyldes</label>
                </ui-form-field>
            </div>
            <div>
                <ui-textfield :model-value="data.minLength" @update:model-value="onChangeHandler($event)" :type="1" fullwidth inputType="number">Min Length</ui-textfield>
            </div>
            <div>
                <ui-textfield :model-value="data.maxLength" @update:model-value="onChangeHandler($event)" :type="1" fullwidth inputType="number">Max Length</ui-textfield>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fields {
    padding: 1rem;
}

.fields>div {
    margin-bottom: 10px;
}

.fields>h4 {
    margin: 1rem 0;
}
</style>
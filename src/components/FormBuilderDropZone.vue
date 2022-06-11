<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref } from "vue";

const emits = defineEmits(["clickcomponent"])

const componentProperties = ref("")

const formComponentSelected = ref("")
const formComponents = ref([])

const componentPropertyHandler = (element) => {
    console.log(element)
    formComponentSelected.value = element.id
    componentProperties.value = `${element.name}Properties`
    emits("clickcomponent", componentProperties.value)
}
</script>

<template>
    <div class="form">
            <div>
                <draggable :list="formComponents" :group="{ name: 'componentList' }" class="drop-zone" item-key="id">
                    <template #item="{ element }">
                        <div>
                            <component :is="element.name" class="component" @click="componentPropertyHandler(element)"
                                v-bind="{ disabled: false }"></component>
                        </div>
                    </template>
                </draggable>
            </div>
        </div>
</template>

<style scoped>
form {
    background-color: rgb(254, 255, 249);
}

.form .drop-zone {
    border: 1px solid transparent;
    background-color: rgb(255, 255, 255);
    min-height: 100px;
    /* margin: 10px; */
    padding: 10px;
}

.form .drop-zone:hover {
    border: 1px solid rgb(196, 217, 255);
}

.form .drop-zone .component {
    margin: 10px;
    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 4px;
}

.form .drop-zone .component:hover {
    border: 1px solid rgb(196, 217, 255);
    cursor: pointer;
}
</style>
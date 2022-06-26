<script setup lang="ts">
import draggable from 'vuedraggable'
import { ref } from "vue";
import type { FormBuilderComponent } from "@/types/form-builder.types";

const emits = defineEmits(["clickcomponent"])
const componentProperties = ref("")
const formComponents = ref([])

const componentPropertyHandler = (element: FormBuilderComponent) => {
    componentProperties.value = `${element.type}Properties`
    emits("clickcomponent", componentProperties.value)
}
</script>

<template>
    <div class="form">
        <div>
            <draggable :list="formComponents" :group="{ name: 'componentList' }" class="drop-zone" item-key="id">
                <template #item="{ element }">
                    <div>
                        <component :is="element.type" class="component" @click="componentPropertyHandler(element)"
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

/* .form .drop-zone:hover {
    border: 1px solid rgb(196, 217, 255);
} */

.form .drop-zone .component {
    /* margin: 10px; */
    padding: 5px;
    border: 1px solid transparent;
    border-radius: 4px;
}

.form .drop-zone .component:hover {
    border: 1px solid rgb(196, 217, 255);
    cursor: pointer;
}
</style>
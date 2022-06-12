<script setup lang="ts">
import { ref, type Ref } from "vue";
import draggable from 'vuedraggable'
import { uid } from 'uid';

interface ListItem {
    label: string;
    value: string;
}

const open = ref(false)
const dialogItemValue = ref("")
const list: Ref<ListItem[]> = ref([])
const showCreateList = () => {
    open.value = true
}

const addToList = () => {
    list.value.push({
        label: dialogItemValue.value,
        value: uid()
    })
    dialogItemValue.value = ""
}

const removeFromList = (element: ListItem) => {
    console.log(element)
    const newList = list.value.filter((value) => value.value != element.value)
    list.value = newList
}
</script>

<template>
    <div>
        <h2>Select Properties</h2>
        <div class="fields">
            <h4>Standard</h4>
            <div>
                <ui-textfield :type="1" fullwidth>Label</ui-textfield>
            </div>
            <h4>Validering</h4>
            <div>
                <ui-form-field>
                    <ui-checkbox></ui-checkbox>
                    <label>Skal udfyldes</label>
                </ui-form-field>
            </div>
            <h4>Liste værdier</h4>
            <div>
                <ui-button @click="showCreateList">Create liste</ui-button>
            </div>
        </div>
        <Teleport to="body">
            <ui-dialog v-model="open">
                <ui-dialog-title>Create a new list</ui-dialog-title>
                <ui-dialog-content>
                    <div class="dialog-content">
                        <div class="list-input">
                            <ui-textfield :type="1" v-model="dialogItemValue">
                            Create list element
                            <template #after>
                                <ui-icon-button icon="add" @click="addToList"></ui-icon-button>
                            </template>
                        </ui-textfield>
                        </div>
                        <draggable :list="list" item-key="value">
                            <template #item="{ element }">
                                <div class="list-element">
                                    <div>{{element.label}}</div>
                                    <ui-icon-button icon="delete" @click="removeFromList(element)"></ui-icon-button>
                                </div>
                            </template>
                        </draggable>
                    </div>
                </ui-dialog-content>
                <ui-dialog-actions accept-text="Gem" cancel-text="luk"></ui-dialog-actions>
            </ui-dialog>
        </Teleport>
    </div>
</template>

<style scoped>
.list-input {
    margin-bottom: 10px;
}

.list-element {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgb(219, 219, 219);
    padding: 5px;
    border-radius: 4px;
}

.dialog-content {
    padding: 10px;
}

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
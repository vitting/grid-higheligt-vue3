import type { Category } from "@/types/form-builder.types";
import { defineStore } from "pinia";

interface State {
    categoryList: Category[]
}

export const useFormBuilderStore = defineStore("formbuilder", {
    state: () => {
        return {
            categoryList: []
        } as State
    } 
})
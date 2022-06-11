import type { App, Plugin } from "vue";
import TextComponent from "@/components/Input/TextComponent.vue";
import NumberComponent from "@/components/Input/NumberComponent.vue";
import DateComponent from "@/components/Input/DateComponent.vue";
import GridComponent from "@/components/Input/GridComponent.vue";
import SelectComponent from "@/components/Input/SelectComponent.vue";
const InputComponentsPlugin: Plugin = {
  install(app: App) {
    app.component("TextComponent", TextComponent);
    app.component("NumberComponent", NumberComponent);
    app.component("DateComponent", DateComponent);
    app.component("SelectComponent", SelectComponent);
    app.component("GridComponent", GridComponent);
  },
};

export default InputComponentsPlugin;

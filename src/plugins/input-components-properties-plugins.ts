import type { App, Plugin } from "vue";
import TextComponentProperties from "@/components/InputProperties/TextComponentProperties.vue";
import NumberComponentProperties from "@/components/InputProperties/NumberComponentProperties.vue";
import DateComponentProperties from "@/components/InputProperties/DateComponentProperties.vue";
import SelectComponentProperties from "@/components/InputProperties/SelectComponentProperties.vue";
const InputComponentsPropertiesPlugin: Plugin = {
  install(app: App) {
    app.component("TextComponentProperties", TextComponentProperties);
    app.component("NumberComponentProperties", NumberComponentProperties);
    app.component("DateComponentProperties", DateComponentProperties);
    app.component("SelectComponentProperties", SelectComponentProperties);
  },
};

export default InputComponentsPropertiesPlugin;

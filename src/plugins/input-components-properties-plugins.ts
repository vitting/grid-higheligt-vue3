import type { App, Plugin } from "vue";
import TextComponentProperties from "@/components/InputProperties/TextComponentProperties.vue";
const InputComponentsPropertiesPlugin: Plugin = {
  install(app: App) {
    app.component("TextComponentProperties", TextComponentProperties);
  },
};

export default InputComponentsPropertiesPlugin;

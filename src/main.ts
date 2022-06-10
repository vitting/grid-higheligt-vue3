import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';
import InputComponentsPlugin from "./plugins/input-components-plugin"
import InputComponentsPropertiesPlugin from "./plugins/input-components-properties-plugins"

const app = createApp(App)

app.use(createPinia())
app.use(BalmUI);
app.use(BalmUIPlus);
app.use(InputComponentsPlugin)
app.use(InputComponentsPropertiesPlugin)
app.mount('#app')

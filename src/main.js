import { createApp } from 'vue'
import "./assets/main.css"
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import {observe} from "./directives"
const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.directive("observe",observe)
app.mount('#app')

export default app
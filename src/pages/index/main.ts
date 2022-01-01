import "mars3d/dist/mars3d.css"

import { createApp } from "vue"
import Application from "./App.vue"
import { injectState } from "@/common/store/index.js"
import store from "./store"
import MarsUI from "@comp/mars-ui/"
import directive from "@/directive/index"

import "@/styles/index.less" // 加载全局样式

const app = createApp(Application)

app.use(MarsUI)

app.use(injectState(store))
app.use(directive)

app.mount("#app")
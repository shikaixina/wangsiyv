/*
 * @Description: 
 * @Autor: lkx
 * @Date: 2023-01-31 10:24:43
 * @LastEditors: lkx
 * @LastEditTime: 2023-02-02 09:26:24
 */
// https://github.com/zeorcpt/vue3-vant-mobile
import { createApp } from 'vue'
import {createPinia} from 'pinia'
import './style.css'
import 'amfe-flexible'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')

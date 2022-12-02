import Vue from 'vue'

import { PiniaVuePlugin, createPinia } from 'pinia'
const pinia = createPinia()

Vue.use(PiniaVuePlugin)
export default pinia

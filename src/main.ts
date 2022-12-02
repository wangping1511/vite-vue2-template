import Vue from 'vue'
import App from './App.vue'
import router from './modules/router'
import i18n from './modules/i18n'
import pinia from './modules/store'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'
import 'amfe-flexible/index.js'
import 'nprogress/nprogress.css'

new Vue({
  i18n,
  router,
  pinia,
  render: h => h(App),
}).$mount('#app')

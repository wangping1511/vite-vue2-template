import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import router from './modules/router'
import i18n from './modules/i18n'
import pinia from './modules/store'

import '@unocss/reset/tailwind.css'
import './styles/main.scss'
import 'uno.css'
import 'amfe-flexible/index.js'
import 'nprogress/nprogress.css'

import 'vant/lib/toast/style'
import 'vant/lib/dialog/style'
import 'vant/lib/notify/style'

Vue.use(VueClipboard)

new Vue({
  i18n,
  router,
  pinia,
  render: h => h(App),
}).$mount('#app')

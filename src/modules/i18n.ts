import Vue from 'vue'
import { castToVueI18n, createI18n } from 'vue-i18n-bridge'
import VueI18n from 'vue-i18n'
import messages from '@intlify/unplugin-vue-i18n/messages'

Vue.use(VueI18n, { bridge: true })

const i18n = castToVueI18n(
  createI18n(
    {
      legacy: false,
      locale: 'en',
      silentTranslationWarn: true,
      missingWarn: false,
      messages,
    },
    VueI18n,
  ),
)
Vue.use(i18n)
export default i18n

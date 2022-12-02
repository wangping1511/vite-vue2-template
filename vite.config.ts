import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Unocss from 'unocss/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'

import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import PostcssPluginPx2rem from 'postcss-plugin-px2rem'

import ViteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    vue(),
    Pages(),
    Layouts(),
    Unocss(),
    VueI18n({
      include: './locales/*.y(a)?ml',
    }),
    AutoImport({
      imports: [
        {
          'vue-router/composables': [
            'useRoute',
            'useRouter',
          ],
        },
        {
          'vue-i18n-bridge': [
            'useI18n',
          ],
        },
        {
          '~/utils/request': [
            ['default', 'request'],
          ],
        },
      ],
      dirs: [
        './src/stores',
      ],
      vueTemplate: true,
      dts: './src/auto-imports.d.ts',
    }),
    Components({
      dts: './src/components.d.ts',
    }),
    ViteCompression(),
  ],

  css: {
    postcss: {
      plugins: [
        PostcssPluginPx2rem({
          rootValue: 37.5, // 换算基数，1rem相当于10px,值为37.5时,1rem为20px,淘宝的flex默认为1rem为10px
          // unitPrecision: 5, //允许REM单位增长到的十进制数字。
          // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
          // propBlackList: ['font-size', 'border'], // 黑名单
          exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
          // selectorBlackList: [], //要忽略并保留为px的选择器
          // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
          // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
          mediaQuery: false, // （布尔值）允许在媒体查询中转换px。
          minPixelValue: 3, // 设置要替换的最小像素值(3px会被转rem)。 默认 0
        }),
      ],
    },
  },

  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})

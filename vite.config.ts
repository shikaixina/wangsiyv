/*
 * @Description: 
 * @Autor: lkx
 * @Date: 2023-01-31 10:24:43
 * @LastEditors: lkx
 * @LastEditTime: 2023-01-31 16:34:31
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

import postCssPxRem  from 'postcss-pxtorem'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')
    }
  },
  css:{
    // preprocessorOptions:{
    //   scss:{
    //     additionalData:'@import "@/assets/style/index.scss";'
    //   }
    // },
    postcss:{
      plugins:[
        postCssPxRem({
          rootValue({ file }) {
            return file.indexOf('vant') !== -1 ? 37.5 : 75;
          },
          propList:['*']
        })
      ]
    }
  },
  build:{
    minify:'terser',
    terserOptions:{
      compress:{
        drop_console:true,
        drop_debugger:true
      }
    }
  },
  server:{
    host:'0.0.0.0',
    port:711,
    open:true,
    https:false,
    proxy:{}
  }
})

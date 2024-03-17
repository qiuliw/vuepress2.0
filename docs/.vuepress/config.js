import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  //打包工具
  bundler: viteBundler(),
  //主题
  theme: defaultTheme(),

  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',

  //基础部署路径
  base: '/vuepress2.0/',
  head:[]

})

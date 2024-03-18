import comp from "/Users/qiuliwei/devTools/Github/vuepress2.0/docs/.vuepress/.temp/pages/posts/text.html.vue"
const data = JSON.parse("{\"path\":\"/posts/text.html\",\"title\":\"文本1\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"二级\",\"slug\":\"二级\",\"link\":\"#二级\",\"children\":[{\"level\":3,\"title\":\"三级\",\"slug\":\"三级\",\"link\":\"#三级\",\"children\":[]}]}],\"git\":{\"updatedTime\":1710716460000,\"contributors\":[{\"name\":\"qiuliw\",\"email\":\"1807191473@qq.com\",\"commits\":1}]},\"filePathRelative\":\"posts/text.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

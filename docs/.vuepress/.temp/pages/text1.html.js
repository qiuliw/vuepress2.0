import comp from "/Users/qiuliwei/devTools/Github/vuepress2.0/docs/.vuepress/.temp/pages/text1.html.vue"
const data = JSON.parse("{\"path\":\"/text1.html\",\"title\":\"文本1\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"二级\",\"slug\":\"二级\",\"link\":\"#二级\",\"children\":[{\"level\":3,\"title\":\"三级\",\"slug\":\"三级\",\"link\":\"#三级\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"text1.md\"}")
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

import comp from "/Users/qiuliwei/devTools/Github/vuepress2.0/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Vuepress2.0 Demo\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"这是一个示例\",\"slug\":\"这是一个示例\",\"link\":\"#这是一个示例\",\"children\":[]},{\"level\":2,\"title\":\"静态资源测试\",\"slug\":\"静态资源测试\",\"link\":\"#静态资源测试\",\"children\":[]}],\"git\":{\"updatedTime\":1710722683000,\"contributors\":[{\"name\":\"qiuliw\",\"email\":\"1807191473@qq.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\"}")
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

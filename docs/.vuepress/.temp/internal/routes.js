export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/qiuliwei/devTools/Github/vuepress2.0/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Vuepress2.0 Demo"} }],
  ["/posts/text.html", { loader: () => import(/* webpackChunkName: "text.html" */"/Users/qiuliwei/devTools/Github/vuepress2.0/docs/.vuepress/.temp/pages/posts/text.html.js"), meta: {"title":"文本1"} }],
  ["/posts/text_two.html", { loader: () => import(/* webpackChunkName: "text_two.html" */"/Users/qiuliwei/devTools/Github/vuepress2.0/docs/.vuepress/.temp/pages/posts/text_two.html.js"), meta: {"title":"文本2"} }],
  ["/posts/Java/JavaSE.html", { loader: () => import(/* webpackChunkName: "JavaSE.html" */"/Users/qiuliwei/devTools/Github/vuepress2.0/docs/.vuepress/.temp/pages/posts/Java/JavaSE.html.js"), meta: {"title":"JavaSE"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/qiuliwei/devTools/Github/vuepress2.0/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}

import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/tag/浏览器/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/%E6%B5%8F%E8%A7%88%E5%99%A8/\",\"title\":\"Tag 浏览器\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tag 浏览器\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"浏览器\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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

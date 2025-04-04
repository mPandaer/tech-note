import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"主页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"主页\",\"heroImage\":\"/pandaer.jpg\",\"actions\":[{\"text\":\"最新文章\",\"link\":\"/article/\",\"type\":\"primary\"},{\"text\":\"关于我\",\"link\":\"https://github.com/mPandaer\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"技术笔记\",\"details\":\"记录技术学习笔记\"},{\"title\":\"技术分享\",\"details\":\"分享技术学习心得\"},{\"title\":\"技术总结\",\"details\":\"总结技术学习经验\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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

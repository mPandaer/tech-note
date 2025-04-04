export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B9%8B%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.html", { loader: () => import(/* webpackChunkName: "posts_浏览器之事件循环.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/posts/浏览器之事件循环.html.js"), meta: {"_blog":{"title":"事件循环","author":"","date":"2025-04-04T00:00:00.000Z","category":["前端"],"tag":["浏览器"],"excerpt":"\n<p>探究技术的本质，享受技术的乐趣！你好，我是pandaer,今天我们来聊聊浏览器中的事件循环，这篇文章我会先从『我们为什么需要事件循环？』开始，带你探究一些<strong>事件循环</strong>的本质。接下来我们开始吧！</p>\n<h2>进程与线程，你不得不知道的知识！</h2>\n<p>进程与线程已经是我说过无数遍的内容了，为了保证内容的完整性，这里我就再啰嗦一下。进程（process）代表的是一个正在运行的程序，可以是微信，可以3A游戏。最直观的感受就是进程它占内存，它需要一大块独<strong>立的内存空间</strong>。所以进程更像一个工厂，工厂想工作就需要有工人，而线程（thread）就是工人，他负责执行具体的任务，如果想要工厂的工作效率快，那么就多加一些工人就好了。这就是<strong>多线程</strong>。</p>"},"title":"事件循环"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/%E5%89%8D%E7%AB%AF/", { loader: () => import(/* webpackChunkName: "category_前端_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/category/前端/index.html.js"), meta: {"title":"Category 前端"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/%E6%B5%8F%E8%A7%88%E5%99%A8/", { loader: () => import(/* webpackChunkName: "tag_浏览器_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/tag/浏览器/index.html.js"), meta: {"title":"Tag 浏览器"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/vuepress-starter/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
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

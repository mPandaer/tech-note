import comp from "D:/vuepress-starter/docs/.vuepress/.temp/pages/posts/浏览器之事件循环.html.vue"
const data = JSON.parse("{\"path\":\"/posts/%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B9%8B%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.html\",\"title\":\"事件循环\",\"lang\":\"en-US\",\"frontmatter\":{\"date\":\"2025-04-04T00:00:00.000Z\",\"category\":[\"前端\"],\"tag\":[\"浏览器\"],\"sticky\":10},\"headers\":[{\"level\":2,\"title\":\"进程与线程，你不得不知道的知识！\",\"slug\":\"进程与线程-你不得不知道的知识\",\"link\":\"#进程与线程-你不得不知道的知识\",\"children\":[]},{\"level\":2,\"title\":\"为什么我们要学习浏览器中的事件循环？\",\"slug\":\"为什么我们要学习浏览器中的事件循环\",\"link\":\"#为什么我们要学习浏览器中的事件循环\",\"children\":[]},{\"level\":2,\"title\":\"一些浏览器的基本知识！\",\"slug\":\"一些浏览器的基本知识\",\"link\":\"#一些浏览器的基本知识\",\"children\":[]},{\"level\":2,\"title\":\"为什么渲染进程会选择事件循环作为其工作方式呢？\",\"slug\":\"为什么渲染进程会选择事件循环作为其工作方式呢\",\"link\":\"#为什么渲染进程会选择事件循环作为其工作方式呢\",\"children\":[]},{\"level\":2,\"title\":\"事件循环的核心模型\",\"slug\":\"事件循环的核心模型\",\"link\":\"#事件循环的核心模型\",\"children\":[{\"level\":3,\"title\":\"延时任务是如何执行的呢？\",\"slug\":\"延时任务是如何执行的呢\",\"link\":\"#延时任务是如何执行的呢\",\"children\":[]},{\"level\":3,\"title\":\"网络请求是如何执行的呢？\",\"slug\":\"网络请求是如何执行的呢\",\"link\":\"#网络请求是如何执行的呢\",\"children\":[]}]},{\"level\":2,\"title\":\"事件循环的演进！\",\"slug\":\"事件循环的演进\",\"link\":\"#事件循环的演进\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"posts/浏览器之事件循环.md\",\"excerpt\":\"\\n<p>探究技术的本质，享受技术的乐趣！你好，我是pandaer,今天我们来聊聊浏览器中的事件循环，这篇文章我会先从『我们为什么需要事件循环？』开始，带你探究一些<strong>事件循环</strong>的本质。接下来我们开始吧！</p>\\n<h2>进程与线程，你不得不知道的知识！</h2>\\n<p>进程与线程已经是我说过无数遍的内容了，为了保证内容的完整性，这里我就再啰嗦一下。进程（process）代表的是一个正在运行的程序，可以是微信，可以3A游戏。最直观的感受就是进程它占内存，它需要一大块独<strong>立的内存空间</strong>。所以进程更像一个工厂，工厂想工作就需要有工人，而线程（thread）就是工人，他负责执行具体的任务，如果想要工厂的工作效率快，那么就多加一些工人就好了。这就是<strong>多线程</strong>。</p>\"}")
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

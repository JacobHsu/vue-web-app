# Vue Docs

使用keep-alive優化網頁性能

在动态组件上使用 [keep-alive](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

城市選擇只會發一次請求(keep-alive)  
首頁重發ajax更新城市選擇結果 當城市不變　不發ajax

src\App.vue

```js
<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
```

src\pages\home\Home.vue

[#activated](https://cn.vuejs.org/v2/api/#activated)
被 keep-alive 缓存的组件激活时调用。

```js
  // 頁面重新渲染　activated 才被調用　城市變化　api才發請求
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
```

## router

加tag不會渲染成`a`標籤　而是`li`標籤  
`<router-link tag="li"`

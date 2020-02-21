# Vue Docs

使用keep-alive優化網頁性能

在动态组件上使用 [keep-alive](https://cn.vuejs.org/v2/guide/components-dynamic-async.html)

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

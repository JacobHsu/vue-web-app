# vue-web-app

[creating-a-project](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

`vue create vue-web-app`

## mobile setting

Viewport的設定 用戶手指放大縮小無效

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

[reset.css](https://meyerweb.com/eric/tools/css/reset/) 重置基本樣式表
移动端1像素边框问题  
border.css 解決移動端[1像素邊框問題](https://www.jianshu.com/p/fa670b737a29)  
[FastClick](https://www.npmjs.com/package/fastclick) is a simple, easy-to-use library for eliminating the 300ms delay between a physical tap  
[Iconfont](https://www.iconfont.cn/)-阿里巴巴矢量图标库  

[vue项目笔记（4）-常用的基础样式（reset.css与border.css）](https://blog.csdn.net/qq_41115965/article/details/81542910)

### CSS

reset.css

```html
html {overflow-x: hidden;height: 100%;font-size: 50px;
```

1 rem = html font-size = 50px
43px / 50px = 86px / 100px = .86 rem  `line-height: .86rem`

[REM](https://www.hexschool.com/2016/01/02/2016-08-08-em-vs-rem/)
20px  = 50 * 0.4 = .4rem

## Tools

[vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)
`yarn add vue-awesome-swiper@2.6.7 `  
[Vue.js devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)  

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

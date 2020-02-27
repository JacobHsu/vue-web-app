module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './vue-web-app' : '/',
    devServer: {
     open: true,
     host: 'localhost',  // 設置主機地址
     port: 8080,         // 設置默認埠號
     https: false,
     //以上的ip和埠號是我們本機的;下面為需要跨域的
     proxy: {    //配置跨域
      '/api': {
       target: 'http://localhost:8080',
       //ws: true,     // 如果要代理 websockets
       //changOrigin: true,  //允許跨域
       pathRewrite: {
        '^/api': '/mock' //請求的時候使用這個api就可以
       }
      }
     }
    }
};
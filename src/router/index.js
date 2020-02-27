import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home //() => import('@/pages/home/Home')  
    //Home 異步組件按需加載 只載對應的js等資源 但訪問下一個頁面時 會重發請求 建議app.js小時不用拆分
    // api請求的代價 比 首頁多加載js 要高 (app.js 超過1MB 再拆分)
  },
  {
    path: '/city',
    name: 'City',
    component: City
  }, 
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router

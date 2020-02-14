<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
  },
  data () {
    return {
      swiperList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vc/6d/9f/35/b8ad5468f73fd60ec0ced086f6.jpg_92.jpg'
      },{
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vc/44/e9/86/95bc36c9e1c06ebd68bdfe222e.jpg_92.jpg'
      }],
    }
  },
}
</script>

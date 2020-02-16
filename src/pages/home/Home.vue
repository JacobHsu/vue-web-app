<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
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
      iconList: [{
        id: '0001',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },{
        id: '0002',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },{
        id: '0003',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },{
        id: '0004',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },{
        id: '0005',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },{
        id: '0006',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },{
        id: '0007',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },{
        id: '0008',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      },{
        id: '0009',
        imgUrl: 'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
        desc: '海外酒店'
      },{
        id: '0010',
        imgUrl: 'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
        desc: '自由行'
      }],
      recommendList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/p/p97/1512/73/97da2a9e39df59f7.jpg_256x160_acb41adf.jpg',
        title: '河池-成都 5天跟团游',
        desc: '含往返飞机票(含税)+4晚住宿'
      },{
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/p/p66/201304/17/384810d022dd28f793835fbb.jpg_256x160_6a7ec251.jpg',
        title: '河池-三亚 5天跟团游',
        desc: '含往返飞机票+5晚住宿'
      }],
      weekendList: [{
        id: '0001',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/3cbe255c-539b-4958-b0bc-a2c2e2ba4444.jpg_r_390x260x90_5ab5ba96.jpg',
        title: '北京-九寨沟 5天跟团游',
        desc: '飞机往返|早中班可选|超值特卖|0自费一价全包！九寨沟黄龙/牟尼沟双飞五日游'
      },{
        id: '0002',
        imgUrl: '//imgs.qunarzz.com/vs_ceph_vs_tts/e9842e5d-c259-4711-8439-724d032e66ea.jpg_r_480x320x90_2ab8f532.jpg',
        title: '北京-东京 5天跟团游',
        desc: '💎欢乐畅想💎日本东京半自助5日游💎东京+横滨+富士山+镰仓+江之岛神社'
      }]
    }
  },
}
</script>

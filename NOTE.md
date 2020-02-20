# NOTES

## 兄弟間傳值 (子→父→子)

pages\city\components\Alphabet.vue 子

```js
@click="handleLetterClick"
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
```

pages\city\City.vue 父

```js
<city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
handleLetterChange (letter) {
    this.letter = letter //e.target.innerText
}

<city-list
      :cities="cities"
      :hot="hotCities"
      :letter="letter"
    ></city-list>
```

pages\city\components\List.vue 子

```js
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String // 通過屬性值傳遞
  },

  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },

    <div
        class="area"
        :ref="key"
    >
```

## City Search

pages\city\components\Search.vue

```js
 <input v-model="keyword" class="search-input" type="text"
   data () {
    return {
      keyword: '',

  props: {
    cities: Object
  },

  watch: {
    keyword () {
       for (let i in this.cities) {
```

src\pages\city\City.vue

```js
<city-search :cities="cities"></city-search>
```

## vuex

src\store\state.js

```js
let defaultCity = '上海'
export default {
  city: defaultCity
}
```

src\store\mutations.js

```js
 changeCity (state, city) {
    state.city = city
```

pages\home\components\Header.vue

```js
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) //{{this.$store.state.city}} -> {{this.city}}
  }
}

<router-link to='/city'>
  <div class="header-right">
    {{this.city}}
```

pages\city\components\List.vue

```js
import { mapState, mapMutations } from 'vuex'
  computed: {
    ...mapState({
      currentCity: 'city' // {{this.$store.state.city}} -> {{this.currentCity}}
    })
  },
   methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },

  <div class="title border-topbottom">当前城市</div>
  <div class="button">{{this.currentCity}}</div>

  <div class="title border-topbottom">热门城市</div>
  @click="handleCityClick(item.name)"
```

pages\city\components\Search.vue

```js
import { mapMutations } from 'vuex'
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },

 v-for="item of list"
   @click="handleCityClick(item.name)"
```
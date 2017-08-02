<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in data">
          <img :src="item" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.css'
    export default {
        props:['data'],
        data(){
            return {}
        },
        mounted(){
          new Swiper('.swiper-container',{
              loop:true,
              pagination:'.swiper-pagination'
          })
        },
        computed: {},
        components: {},
        methods: {},
    }
</script>

<style scoped>
  img{
    width:100%
  }
</style>

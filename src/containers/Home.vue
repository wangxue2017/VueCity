<template>

    <div id="app">
      <m-header title="阅读的书籍"></m-header>
      <div v-if="sliders.length">
        <Slider :data="sliders"></Slider>
      </div>
      <h3>最新收藏图书</h3>
      <ul class="hot">
        <li v-for="hot in hots">
          <img :src="hot.bookCover" alt="">
          <span>{{hot.bookName}}</span>
        </li>
      </ul>
      <loading v-if="isLoading"></loading>
    </div>
</template>

<script>
    import {getSliders,getHot} from 'api';
    import Slider from 'components/Slider'
    import Loading from 'components/Loading'
    import MHeader from 'components/MHeader'
    export default {
        data(){
          return {
              sliders:[],
              hots:[],
              isLoading:true,
          }
        },
        created(){
          getSliders().then((res)=>{
            this.sliders = res.data;
          }).catch(err=>{
            console.log(err);
          });
          getHot().then((res)=>{
            this.hots = res.data;
            this.isLoading = false;
          })
        },
        computed: {},
        components: {
          Slider,
          Loading,
          MHeader
        },
        methods: {},
    }
</script>

<style scoped lang="less">
  h3{color:#666666;padding-left: 2%;margin: 10px 0; font-weight: normal}
  .hot{
    display: flex;
    flex-wrap: wrap;
    li{
      text-align: center;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 33.333%;
      img{width: 80%;}
    }
  }
</style>

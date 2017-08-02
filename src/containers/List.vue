<template>
    <div id="app">
        <m-header title="书籍列表"></m-header>
        <scroller :on-refresh="refresh" ref="scroller" class="top">
        <ul class="list">
          <li v-for="book in books">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.content}}</p>
              <p class="btn-list">
                <router-link :to="{path:'/update/'+book.id}" tag="button">修改</router-link>
                <button @click="remove(book.id)">删除</button>
              </p>
            </div>
          </li>
        </ul>
        </scroller>
    </div>
</template>

<script>
    import MHeader from 'components/MHeader'
    import {getBook,removeBook} from 'api'
    export default {
        data(){
          return {books:[]}
        },
        created(){
            this.getList()
        },
        computed: {},
        components: {MHeader},
        methods: {
            getList(){
              getBook().then(res=>{
                this.books = res.data;
                this.$refs.scroller.finishPullToRefresh();
              })
            },
            refresh(){
              this.getList();
            },
            remove(id){
              removeBook(id).then(res=>{
                  this.books = this.books.filter(item=>item.id!==id)
              })
            }
        },
    }
</script>

<style scoped lang="less">
  .btn-list{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    button{
      width: 60px;
    }
  }
  .list{
    li{
      display: flex;
      border-bottom: 1px solid #ccc;
      img{width: 100px;height: 90px;margin: 10px}
      div{
        h3{color: #666666;margin: 5px;}
        display: flex;
        flex-direction: column;
      }
    }
    img[lazy="loading"]{
      background: url("../assets/loading.gif") no-repeat center;
      background-size: 50%;
    }
    img[lazy="loaded"]{
      animation: fadeIn 0.5s;
    }
  }
  @keyframes fadeIn {
    from{opacity: 0}
    to{opacity: 1}
  }
  .top{margin-top:40px}
  .icon-shoucang{font-size: 22px;color: orangered}
</style>

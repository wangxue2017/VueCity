<template>
    <div id="app">
        <div class="content">
          <keep-alive>
              <router-view></router-view>
          </keep-alive>
        </div>
        <tab></tab>
    </div>
</template>

<script>
    import Tab from 'components/Tab'
    export default {
        data(){

        },
        computed: {},
        components: {
            Tab
        },
        methods: {},
    }
</script>

<style scoped>
  .content{
    margin-bottom: 65px;
  }
</style>

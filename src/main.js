import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/index.less'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
//console.log(App);
new Vue({
  el: '#app',
  router,
  ...App,
});

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'

// 引入需要打包的外部样式
import './common/stylus/index.styl'

Vue.prototype.$axios = axios
  
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data:{
    eventHub:new Vue()
  },
  components: { App },
  template: '<App/>'
})

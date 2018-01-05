// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)

Vue.config.productionTip = false

/* eslint-disable no-new, vue/order-in-components */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

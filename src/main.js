// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueMaterial)
Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  router,
  store,
  el: '#app',
  render: createElement => createElement(App)
})

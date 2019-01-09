// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import WeVue from 'we-vue'
import 'we-vue/lib/style.css'
import VueResource from 'vue-resource'
// import Axios from 'axios';


// import Vuex from 'vuex'
import axios from 'axios'


Vue.config.productionTip = false
Vue.use(WeVue)
Vue.use(VueResource)
// Vue.use(Axios)




// Vue.use(Vuex)
Vue.prototype.$ajax = axios







/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

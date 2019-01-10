// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n/index'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/init.css'
import  './assets/css/public.css'
Vue.use(Mint)
router.beforeEach((to,from,next)=>{
  document.title=to.meta.title,
  next()
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})

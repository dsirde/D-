import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/pages/home/index1'
// import Favorite from '@/pages/favorite/index'

 const home =()=>import('@/pages/home/index1.vue')
 const Favorite =()=>import('@/pages/favorite/index')
 const Favorite1 =()=>import('@/pages/favorite1/index')
 const Favorite2 =()=>import('@/pages/favorite2/index')
 const Search =()=>import('@/pages/search/index.vue')
Vue.use(Router)
export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{title:'D先生的首页'},
      component: home
    },
    {
      path: '/favorite',
      name: 'Favorite',
      meta:{title:'风云排行榜'},
      component: Favorite
    },
    {
      path: '/favorite1',
      name: 'Favorite1',
      meta:{title:'精品推荐'},
      component: Favorite1
    },
    {
      path: '/favorite2',
      name: 'Favorite2',
      meta:{title:'宝宝最爱'},
      component: Favorite2
    },
    {
      path: '/search',
      name: 'Search',
      meta:{title:'搜索'},
      component:Search
    },
  ]
})

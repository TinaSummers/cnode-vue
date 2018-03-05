import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import User from '@/components/user'
import Article from '@/components/article'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/article',
      name: 'article',
      component: Article
    },{
    	path: '/login' ,
    	name: 'login' ,
    	component: Login
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/home/Home'
import Login from 'pages/login/Login'
import Regist from 'pages/regist/Regist'
import Personal from 'pages/personal/Personal'
import Message from 'pages/message/Message'
import Info from 'pages/info/Info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/regist',
      name: 'Regist',
      component: Regist
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        // meta元素
        requireAuth: true
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        // meta元素
        requireAuth: true
      }
    },
    {
      path: '/info',
      name: 'Info',
      component: Info,
      meta: {
        // meta元素
        requireAuth: true
      }
    },
    {
      path: '*', // 路由器添加基本配置重定向到'home'
      redirect: '/home'
    }
  ]
})

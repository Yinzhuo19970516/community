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
      component: Personal
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})

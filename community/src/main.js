// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import 'normalize.css'
import 'styles/base.styl'

Vue.config.productionTip = false
// 全局导航钩子
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 判断是否需要验证
    if (!isEmptyObject(store.state.user)) { // 判断从vuex获取的user是否为空
      next()
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

function isEmptyObject (obj) {
  for (var key in obj) {
    return false
  }
  return true
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'
const whiteList = ['/login', '/404']

router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') {
      NProgress.done()
      console.log(123)

      next('/')
    } else {
      if (!store.state.user.userInfo.id) {
        store.dispatch('user/getUserInfo')
      }

      next()
    }
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})

router.afterEach(() => {
  // 进度结束
  NProgress.done()
})

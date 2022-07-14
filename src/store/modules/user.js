import { login, getInfo, getUserDetailById } from '@/api/user'
import { getToken, setToken, removeToken, setTime } from '@/utils/auth'
const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken (state, payload) {
    state.token = payload
  },
  setUserInfo (state, payload) {
    state.userInfo = payload
  },
  removeToken (state) {
    state.token = null
    removeToken()
  },
  removeUserInfo (state) {
    state.userInfo = {}
  }
}
const actions = {
  async login (context, data) {
    const res = await login(data)
    context.commit('setToken', res)
    setToken(res)
    setTime(Date.now())
  },
  async getUserInfo (context) {
    const res = await getInfo()
    const res1 = await getUserDetailById(res.userId)
    console.log(res)
    console.log(res1)
    context.commit('setUserInfo', { ...res, ...res1 })
  },
  logout (context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}


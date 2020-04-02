import { login } from './service'

export default {
  name: 'login',
  namespaced: true,
  state: {
  },

  getters: {
  },

  mutations: {
  },

  actions: {
    /**
     * 登录
     * @param {*} param0
     */
    async USER_LOGIN ({ commit }) {
      try {
        return await login()
      } catch (err) {
        console.log(err)
      }
    }
  }
}

import { query } from './service'

export default {
  name: 'home',
  namespaced: true,
  state: {
    userName: ''
  },

  getters: {
  },

  mutations: {
    /**
     * 保存用户名
     * @param {*} state
     * @param {*} payload
     */
    SAVE_USER_INFO (state, payload) {
      state.userName = payload.name
    }
  },

  actions: {
    /**
     * 获取用户信息
     * @param {*} param0
     */
    async QUERY_USER_INFO ({ commit }) {
      try {
        const res = await query()
        commit('SAVE_USER_INFO', res.datas)
      } catch (err) {
        console.log(err)
      }
    }
  }
}

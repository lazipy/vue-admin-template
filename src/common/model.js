import menuConfig from './menuConfig'

export default {
  name: 'common',
  namespaced: true,
  state: {
    collapsed: false,
    visitedViews: [],
    menuConfig
  },

  getters: {
  },

  mutations: {
    /**
     * 菜单收缩
     * @param {*} state
     * @param {*} payload
     */
    TOGGLE_MENU (state, payload) {
      state.collapsed = !state.collapsed
    },

    /**
     * 添加一个访问过的页面
     * @param {*} state
     * @param {路由信息} view
     */
    ADD_VISITED (state, view) {
      if (state.visitedViews.some(v => v.path === view.path)) return
      state.visitedViews.push({
        name: view.name,
        path: view.path,
        title: view.meta.title || 'no-name'
      })
    },

    /**
     * 删除一个访问过的页面
     * @param {*} state
     * @param {路由信息} view
     */
    DEL_VISITED (state, view) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    },

    /**
     * 删除其他访问过的页面
     * @param {*} state
     * @param {路由信息} view
     */
    DEL_OTHER (state, view) {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.slice(i, i + 1)
          break
        }
      }
    },

    /**
     * 删除所有访问过的页面
     * @param {*} state
     * @param {路由信息} view
     */
    DEL_ALL (state) {
      state.visitedViews = []
    }
  },

  actions: {
    /**
     * 添加一个访问过的页面
     * @param {*} action
     * @param {路由信息} view
     */
    ADD_VISITED (action, view) {
      action.commit('ADD_VISITED', view)
    },

    /**
     * 删除一个访问过的页面
     * @param {*} action
     * @param {路由信息} view
     */
    DEL_VISITED (action, view) {
      return new Promise(resolve => {
        action.commit('DEL_VISITED', view)
        resolve([...action.state.visitedViews])
      })
    },

    /**
     * 删除其他访问过的页面
     * @param {*} action
     * @param {路由信息} view
     */
    DEL_OTHER (action, view) {
      return new Promise(resolve => {
        action.commit('DEL_OTHER', view)
        resolve([...action.state.visitedViews])
      })
    },

    /**
     * 删除所有访问过的页面
     * @param {*} action
     * @param {路由信息} view
     */
    DEL_ALL (action) {
      return new Promise(resolve => {
        action.commit('DEL_ALL')
        resolve([...action.state.visitedViews])
      })
    }
  }
}

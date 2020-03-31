import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './model'
import ElementUI from 'element-ui'
import 'normalize.css/normalize.css'
import './styles/index.scss'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

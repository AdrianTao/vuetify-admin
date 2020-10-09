import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import '@/icons' // icon
import '@/permission' // permission control
import '@/styles/index.scss'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import dialog from './plugins/dialog/' // 封装的dialog组件
Vue.prototype.$dialog = dialog // 可通过this.$dialog函数调用

Vue.config.productionTip = false

const vue = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

export default vue

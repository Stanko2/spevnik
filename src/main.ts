import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { VueHammer } from 'vue2-hammer'
import './assets/tailwind.css'

Vue.config.productionTip = false
Vue.use(VueHammer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

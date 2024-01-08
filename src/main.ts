import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { VueHammer } from 'vue2-hammer'
import './assets/tailwind.css'
import store from './store'
import './registerServiceWorker'
import './toaster'

Vue.config.productionTip = false
Vue.use(VueHammer)
// eslint-disable-next-line @typescript-eslint/no-var-requires
const shortkey = require('vue-shortkey')
Vue.use(shortkey, { prevent: ['input', 'textarea'] })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

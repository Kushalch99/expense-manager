import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetifiy'
import VueProgressBar from 'vue-progressbar'
import VueCookies from 'vue-cookies'

Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: '#fb3e3e',
  failedColor: '#ff0000',
  thickness: '8px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  inverse: false
})
Vue.use(VueCookies)

export default new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

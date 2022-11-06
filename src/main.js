import Vue from 'vue'
import store from './store'
import Vuelidate from 'vuelidate'
import router from '@/router/index.js'
import App from './App.vue'
import '@/components/global'
import VueSax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import Paginate from "vuejs-paginate-next"


Vue.config.productionTip = false

Vue.use(Paginate)
Vue.use(VueSax)
Vue.use(Vuelidate)



new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

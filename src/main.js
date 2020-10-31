import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2)
Vue.component('l-map', LMap)
Vue.component('l-tile-layer', LTileLayer)
Vue.component('l-marker', LMarker)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

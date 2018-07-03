import Vue from 'vue';
import App from './App.vue';
import router from './routes/routes';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-light.css';

// import themeing scss 
import "./assets/scss/main.scss";

// import google maps API
import * as VueGoogleMaps from 'vue2-google-maps';
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCKAuaGfBuzSMjC8ngxTwL9pt39m5exRXM',
    libraries: 'places'
  }
})

// vue material
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue';
import App from './App.vue';
import router from './routes/routes';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/black-green-light.css';

// import themeing scss 
import "./assets/scss/main.scss";

// vue material
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

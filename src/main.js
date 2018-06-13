import Vue from 'vue';
import App from './App.vue';
import router from './routes/routes';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
// vue material
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

import Vue from 'vue';
import VueRouter from 'vue-router';
// pages
import DashboardPage from "../components/dashboard/dashboard.vue";
import TipsPage from "../components/tips/tips.vue";

Vue.use(VueRouter);

const routes = [
  { path: '/', component: DashboardPage },
  { path: '/tips', component: TipsPage }
];

export default new VueRouter({ mode: 'history', routes });
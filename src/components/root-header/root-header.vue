<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">DaMeng Tips</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Menu List</span>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <router-link to="/">
              <span class="md-list-item-text">Dashboard</span>
            </router-link>
          </md-list-item>
          <md-list-item>
            <md-icon>send</md-icon>
            <router-link to="/tips">
              <span class="md-list-item-text">Tips</span>
            </router-link>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content class="inner-container">
        <router-view></router-view>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import Dashboard from '../dashboard/dashboard.vue';  
  import Tips from '../tips/tips.vue';

  export default {
    name: 'Header',
    data: () => ({
      menuVisible: false
    }),
    components: {
      'app-dashboard': Dashboard,
      'app-tips': Tips
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }
</script>

<style scoped>
  .md-app {
    height: 100%;
    border: 1px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 240px;
    max-width: calc(100vw - 125px);
  }
  .inner-container {
    min-height: 480px;
    padding: 0px;
  }
</style>

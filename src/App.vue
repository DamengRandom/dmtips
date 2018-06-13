<template>
  <div>
    <app-dashboard></app-dashboard>
  </div>
</template>

<script>
  import Dashboard from "./components/dashboard/dashboard.vue";

  export default {
    name: 'App',
    components: {
      'app-dashboard': Dashboard
    }
  }
</script>

<style scoped>

</style>
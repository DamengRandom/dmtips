<template>
  <div>
    <app-root-header></app-root-header>
  </div>
</template>

<script>
  import RootHeader from "../root-header/root-header.vue";

  export default {
    name: 'Dashboard',
    components: {
      'app-root-header': RootHeader
    },
  }
</script>

<style scoped>
  
</style>
<template>
  <div>
    <app-root-header></app-root-header>
  </div>
</template>

<script>
  import RootHeader from "./components/root-header/root-header.vue";

  export default {
    name: 'App',
    components: {
      'app-root-header': RootHeader
    }
  }
</script>

<style scoped>

</style>
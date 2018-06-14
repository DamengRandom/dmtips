<template>
  <div class="footer">
    <md-toolbar md-elevation="0">
      <p class="text-center">
        <md-icon>copyright</md-icon>Developed by Dameng @2018
      </p>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
  .footer {
    width: 100%;
  }
  .text-center {
    text-align: center; 
  }
  p {
    display: block;
    margin: 0 auto;
  }
</style>

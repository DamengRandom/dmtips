<template>
  <div class="footer">
    <md-toolbar md-elevation="0">
      <p class="text-center footer-text">
        <md-icon>copyright</md-icon><span v-text="footerText"></span>
      </p>
    </md-toolbar>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data: function(){
      return {
        footerText: 'Developed by Dameng @2018'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/partials/footer';
</style>

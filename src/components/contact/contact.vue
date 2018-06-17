<template>
  <div class="text-center" id="contact">
    <div>
      <h2 v-text="contact"></h2>
    </div>
    <div class="md-layout">
      <div class="md-layout-item md-small-size-100">
        <md-content>
          <i class="fab fa-github"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-weixin"></i>
        </md-content>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
     data: function(){
       return {
         contact: 'Contact'
       }
     }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/partials/contact';
</style>

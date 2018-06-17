<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 banner">
      <div class="inner-banner">
        <p v-text="bannerText1"></p>
        <p v-text="bannerText2"></p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner',
    data: function(){
      return {
        bannerText1: 'Hi there, ',
        bannerText2: 'I am Dameng (Front-end Developer) ..'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/partials/banner';
</style>

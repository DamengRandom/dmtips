<template>
  <div id="words">
    <div class="text-center">
      <h2 v-text="words"></h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Words',
    data: function(){
      return {
        words: 'Words'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/partials/words';
</style>

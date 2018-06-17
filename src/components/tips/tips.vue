<template>
  <div>
    <app-editor></app-editor>
  </div>
</template>

<script>
  import editor from '../editor/editor.vue';
  export default {
    name: 'tips',
    data: function(){
      return {
        tips: []
      }
    },
    components: {
      'app-editor': editor
    }
  }
</script>

<style lang="scss" scoped>

</style>
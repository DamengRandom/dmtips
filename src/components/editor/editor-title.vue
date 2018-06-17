<template>
  <div>
    <input type="text" 
      style="display: block; width: 100%;"
      v-bind:value="theTitle"
      @input="titleTyping"
      v-bind:placeholder="titlePlaceholder" />
  </div>
</template>

<script>
  export default {
    name: 'editorTitle',
    props: ['theTitle'],
    data: function() {
      return {
        articleTitle: '',
        titlePlaceholder: 'Please type a title ..',
        editable: false
      }
    },
    methods: {
      titleTyping(event) {
        this.articleTitle = event.target.value;
        this.$emit('titleText', this.articleTitle);
      }
    },
    watch: {
      placeholder() {
        !this.title ? this.titlePlaceholder : this.title
      }
    }
  }
</script>

<style>

</style>
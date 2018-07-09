<template>
  <div class="title-box">
    <i class="fas fa-rocket"></i>
    <input type="text" 
      class="editorTitle"
      v-bind:value="theTitle"
      @input="titleTyping"
      v-bind:placeholder="titlePlaceholder"
      autofocus />
  </div>
</template>

<script>
  export default {
    name: 'editorTitle',
    props: ['theTitle'],
    data: function() {
      return {
        articleTitle: '',
        titlePlaceholder: 'Please type the article title ..',
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
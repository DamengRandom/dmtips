<template>
  <div>
    <button @click="showPreview">Preview</button>
    <button @click="hidePreview">Hide Preview</button>
  </div>
</template>

<script>
  export default {
    name: 'editor-preview',
    data: function() {
      return {

      }
    },
    methods: {
      preview(showHideParam) {
        for(let i = 0; i < document.querySelector("#content").childNodes.length; i++){
          document.querySelector("#content").childNodes[i].childNodes[0].contentEditable = showHideParam;
        }
      },
      showPreview() {
        this.preview("false");
      },
      hidePreview() {
        this.preview("true");
      }
    }
  }
</script>

<style>

</style>

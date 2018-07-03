<template>
  <div>
    <button @click="addLink">Link</button>
    <button @click="setHeading">Heading</button>
    <button @click="bolderText">Bolder</button>
    <button @click="italicText">Italic</button>
    <button @click="strikeText">Strike</button>
    <button @click="textCenter">Text Center</button>
    <button @click="textRight">Text Right</button>
    <button @click="insertOrderedList">Ordered List</button>
    <button @click="insertUnorderedList">Unordered List</button>
  </div>
</template>

<script>
  export default {
    name: 'editorFunctions',
    data: function(){
      return {
        
      }
    },
    methods: {
      bolderText() {
        document.execCommand('bold');
      },
      italicText() {
        document.execCommand('italic');
      },
      strikeText() {
        document.execCommand('strikeThrough');
      },
      textCenter(){
        document.execCommand('JustifyCenter');
      },
      textRight(){
        document.execCommand('JustifyRight');
      },
      insertOrderedList() {
        document.execCommand('insertOrderedList');
      },
      insertUnorderedList() {
        document.execCommand('insertUnorderedList');
      },
      setHeading() {
        let writeSize = prompt('Please enter heading size: (Eg: 1 -> 5)');
        let selectedText = document.getSelection().toString();
        document.execCommand('insertHTML', false, `<h${writeSize}>${selectedText}</h${writeSize}>` );
      },  
      addLink() {
        let writeURL = prompt('Please enter a link (http:// or https:// )');
        let selectedText = document.getSelection().toString();
        document.execCommand('insertHTML', false, `<a href=${writeURL} target="_blank" style="cursor: pointer;">${selectedText}</a>` );
      }
    }
  }
</script>

<style scoped>

</style>
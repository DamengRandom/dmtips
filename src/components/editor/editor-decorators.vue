<template>
  <div>
    <md-button @click="addLink" v-text="decoratorsText.link"></md-button>
    <md-button @click="setHeading" v-text="decoratorsText.heading"></md-button>
    <md-button @click="bolderText" v-text="decoratorsText.bolder"></md-button>
    <md-button @click="italicText" v-text="decoratorsText.italic"></md-button>
    <md-button @click="strikeText" v-text="decoratorsText.strike"></md-button>
    <md-button @click="textCenter" v-text="decoratorsText.centerText"></md-button>
    <md-button @click="textRight" v-text="decoratorsText.rightText"></md-button>
    <md-button @click="insertOrderedList" v-text="decoratorsText.orderedList"></md-button>
    <md-button @click="insertUnorderedList" v-text="decoratorsText.unorderedList"></md-button>
  </div>
</template>

<script>
  export default {
    name: 'editorFunctions',
    data: function(){
      return {
        decoratorsText: {
          link: 'Link',
          heading: 'Heading',
          bolder: 'Bolder',
          italic: 'Italic',
          strike: 'Strike',
          centerText: 'Text Center',
          rightText: 'Text RIght',
          orderedList: 'Ordered List',
          unorderedList: 'Unordered List'
        }
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

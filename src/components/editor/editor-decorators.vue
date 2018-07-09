<template>
  <div>
    <button @click="addLink">
      <i class="fas fa-link">
        <md-tooltip md-direction="bottom" v-text="decoratorsText.link"></md-tooltip>
      </i>
    </button>
    <button @click="setHeading">
      <i class="fas fa-heading">
        <md-tooltip md-direction="bottom" v-text="decoratorsText.heading"></md-tooltip>
      </i>
    </button>
    <button @click="bolderText">
      <i class="fas fa-bold">
        <md-tooltip md-direction="bottom" v-text="decoratorsText.bolder"></md-tooltip>
      </i>
    </button>
    <button @click="italicText">
      <i class="fas fa-italic">
        <md-tooltip md-direction="bottom" v-text="decoratorsText.italic"></md-tooltip>
      </i>
    </button>
    <button @click="strikeText">
      <i class="fas fa-strikethrough">
        <md-tooltip md-direction="bottom" v-text="decoratorsText.strike"></md-tooltip>
      </i>
    </button>
    <button @click="textCenter">
      <i class="fas fa-align-center">
        <md-tooltip md-direction="bottom" v-text="decoratorsText.centerText"></md-tooltip>
      </i>
    </button>
    <button @click="textRight">
      <i class="fas fa-align-right">
        <md-tooltip md-direction="bottom" v-text="decoratorsText.rightText"></md-tooltip>
      </i>
    </button>
    <button @click="insertOrderedList">
      <i class="fas fa-list-ol">
        <md-tooltip md-direction="bottom" v-text="decoratorsText.orderedList"></md-tooltip>
      </i>
    </button>
    <button @click="insertUnorderedList">
      <i class="fas fa-list">
        <md-tooltip md-direction="bottom" v-text="decoratorsText.unorderedList"></md-tooltip>
      </i>
    </button>
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

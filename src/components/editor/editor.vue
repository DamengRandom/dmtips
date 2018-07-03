<template>
  <div contenteditable="false" id="editor">
    <!-- functional buttons -->
    <div v-if="articleTitle.length !== 0">
      <md-button @click="addText" v-text="buttonTexts.text"></md-button>
      <md-button @click="addImage" v-text="buttonTexts.image"></md-button>
      <editor-decorators></editor-decorators>
      <editor-preview v-show="previewable"></editor-preview>
    </div>
    <!-- article area -->
    <article>
      <editor-title :theTitle="articleTitle" 
        @titleText="articleTitle = $event"></editor-title>
      <div id="text">
        <div v-for="(text, index) in texts"
          class="editorText"
          :key="`text${index}`"
          :id="`text${index}`">
          <p type="text" name="text" contenteditable="true" autofocus></p>
          <md-button @click="removeText(`text${index}`)" contenteditable="false">
            <md-icon>close</md-icon>
          </md-button>
        </div>
      </div>
      <div id="image">
        <figure v-for="(item, index) in items"
          :key="`item${index}`"
          :id="`item${index}`">
          <input v-if="!item.image" type="file" @change="onFileChange(item, $event)">
          <div v-else>
            <md-button @click="removeImage(item)">
              <md-icon>close</md-icon>
            </md-button>
            <img :src="item.image" />
          </div>
        </figure>
      </div>
    </article>
    <!-- content(s) preview -->
    <div id="content"></div>
  </div>
</template>

<script>
  import editorDecorators from './editor-decorators.vue';
  import editorTitle from './editor-title.vue';
  import editorPreview from './editor-preview.vue';
  export default {
    name: 'editor',
    components: {
      'editor-decorators': editorDecorators,
      'editor-title': editorTitle,
      'editor-preview': editorPreview
    },
    data(){
      return {
        articleTitle: '',
        texts: [],
        items: [],
        preview: false,
        buttonTexts: {
          text: 'Text',
          image: 'Image'
        }
      }
    },
    methods: {
      addText() {
        this.texts.push({
          word: ''
        });
        let firstNode = document.getElementById('text').firstChild;
        if(firstNode === null){
          return true;
        }
        document.getElementById('content').appendChild(firstNode);
        this.preview = true;
      },
      removeText(textId) {
        document.getElementById(textId).remove();
        this.detectContents();
      },
      detectContents() {
        if(document.getElementById('content').childNodes.length === 0){
          this.preview = false;
        }
      },
      addImage() {
        this.items.push({
          image: false
        });
        let firstNode = document.getElementById('image').firstChild;
        if(firstNode === null){
          return true;
        }
        document.getElementById('content').appendChild(firstNode);
        this.preview = true;
      },
      onFileChange(item, e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(item, files[0]);
      },
      createImage(item, file) {
        var image = new Image();
        var reader = new FileReader();

        reader.onload = (e) => {
          item.image = e.target.result;
        };
        reader.readAsDataURL(file);
      },
      removeImage (item) {
        item.image = false; 
        this.detectContents();
      }
    },
    computed: {
      previewable() {
        return this.preview === true ? this.preview = true : this.preview = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/partials/editor';
</style>

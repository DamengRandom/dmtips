<template>
  <div class="editorPreview">
    <button id="showPreview" @click="showPreview">
      <i class="fas fa-eye">
        <md-tooltip md-direction="bottom" v-text="previewText.preview"></md-tooltip>
      </i>
    </button>
    <button id="hidePreview" @click="hidePreview">
      <i class="fas fa-eye-slash">
        <md-tooltip md-direction="bottom" v-text="previewText.hidePreview"></md-tooltip>
      </i>
    </button>  
  </div>
</template>

<script>
  export default {
    name: 'editor-preview',
    data: function() {
      return {
        previewText: {
          preview: 'Preview',
          hidePreview: 'Hide Preview'
        }
      }
    },
    methods: {
      preview(showHideParam, buttonShowHide) {
        for(let i = 0; i < document.querySelector("#content").childNodes.length; i++){
          document.querySelector("#content").childNodes[i].childNodes[0].contentEditable = showHideParam;
          document.querySelector("#content").childNodes[i].lastChild.style.display = buttonShowHide;
        }
      },
      showPreview() {
        this.preview("false", "none");
        document.getElementById('content').style.border = "1px solid";
        console.log();
      },
      hidePreview() {
        this.preview("true", "block");
        document.getElementById('content').style.border = "none";
      }
    }
  }
</script>

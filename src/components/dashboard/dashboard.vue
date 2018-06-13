<template>
  <div>
    <app-banner></app-banner>
    <app-about></app-about>
    <app-words></app-words>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import About from "../about/about.vue";
  import Banner from '../banner/banner.vue';
  import Contact from "../contact/contact.vue";
  import Footer from '../footer/footer.vue';
  import Words from '../words/words.vue';

  export default {
    name: 'Dashboard',
    components: {
      'app-about': About,
      'app-banner': Banner,
      'app-contact': Contact,
      'app-footer': Footer,
      'app-words': Words 
    },
  }
</script>

<style scoped>
  
</style>
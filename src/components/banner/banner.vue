<template>
  <div class="md-layout">
    <div class="md-layout-item md-small-size-100 banner">
      <div class="inner-banner">
        <p>Hi there, </p>
        <p>I am Dameng (Front-end Developer) ..</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Banner'
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Acme');
  .banner {
    /* background-image: url('../../assets/imgs/dmtips-banner.jpg'); */
    background-image: url('http://res.cloudinary.com/dameng/image/upload/v1528980406/bg104_xjwvyf.jpg');
    background-size: cover;
    background-position: center center;
    height: 360px;
    opacity: 0.83;
  }
  .inner-banner {
    color: #111;
    font-family: 'Acme', sans-serif;
    font-size: 22pt;
    width: 100%;
    padding: 6%;
    line-height: 1.2;
  }
  .inner-banner > p:first-child {
    font-size: 30pt;
  }
</style>

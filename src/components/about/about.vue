<template>
  <div id="about">
    <div class="text-center">
      <h2>About</h2>
    </div>
    <div class="md-layout md-gutter md-alignment-center">
      <div class="md-layout-item md-size-50 md-small-size-100">
        <img class="md-elevation-7"
          src="http://res.cloudinary.com/dameng/image/upload/v1479495307/MyLogo_v5qp2z.png" 
          alt="Dameng Profile"/>
        <p v-text="author"></p>
      </div>
      <div class="md-layout-item md-size-50 md-small-size-100">
        <md-steppers md-vertical :md-active-step.sync="active">
          <md-step id="first" md-label="Started as a Front-end Intern">
            <p>- Company Name: Oomph</p>
            <p>- Experience: Landing pages, website maintance</p>
            <p>- Ended at Oct 2015 ..</p>
          </md-step>
          <md-step id="second" md-label="Junior Front-end Developer">
            <p>- Company Name: Intersective</p>
            <p>- Experience: PWA app developemnt (Angular 4 + Ionic)</p>
            <p>- Ended at April 2018 ..</p>
          </md-step>
          <md-step id="third" md-label="Mid-Level Front-end Developer" md-description="Current Spot">
            <p>- Company Name: Zip</p>
            <p>- Experience: Polish web skills with (Vue + Angular 6)</p>
            <p>- Ongoing ..</p>
          </md-step>
          <md-step id="fourth" md-label="Senior Front-end Developer">
            <p>- Still Striving for </p>
            <p>- Final goal: To be one of the best Front-end developers !!!</p>
          </md-step>
        </md-steppers>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
    data: function(){
      return {
        active: 'third',
        author: 'Author: Dameng'
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  @import '~styles/partials/about';
</style>

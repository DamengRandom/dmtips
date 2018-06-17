<template>
  <div>
    <div class="text-center">
      <h3>About <span>Dameng</span></h3>
    </div>
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
</template>

<script>
  export default {
    name: 'About',
    data: function(){
      return {
        active: 'third'
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
  /* How to implement scss: just need to install node-sass sas-loader packages */
  /* temporary put here, later change */
  .text-center {
    text-align: center; 
  }
  h3 { 
    font-size: 1.8em;
    span {
      border-bottom: 4px solid;
      padding-bottom: 4px;
    }
  }
</style>

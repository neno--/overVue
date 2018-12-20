<template>
  <div id="app" class="container">
    <div class="row">
      <first-component><p>this goes in</p></first-component>
      <second-component>
        <p>this is also inserted</p>
        <span slot="custom1">This one is custom one.</span>
        <span slot="custom2">This one is custom two.</span>
        <span slot="custom4">This one is custom 4 - this one is not defined.</span>
      </second-component>
    </div>
  </div>
</template>

<script>
  import FirstComponent from './components/FirstComponent.vue'
  import SecondComponent from './components/SecondComponent.vue'

  export default {
    name: 'app',
    components: {
      firstComponent: FirstComponent,
      secondComponent: SecondComponent
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
</style>

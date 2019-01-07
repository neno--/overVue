<template>
  <div>
    <span>{{index}}</span>
    <sub-component v-on:my-event="react" :flag="(index % 2) == 0"></sub-component>
    <sub-component v-if="showAnother"></sub-component>
  </div>
</template>

<script>
  import SubComponent from './SubComponent'

  export default {
    components: {
      'sub-component': SubComponent
    },
    props: {
      index: Number
    },
    data: function () {
      return {
        showAnother: false
      }
    },
    methods: {
      react() {
        console.log("reacted!")
        this.showAnother = !this.showAnother
      }
    }
  }
</script>

<style scoped>
  div {
    border-style: solid;
    border-width: 1px;
    float: left;
    margin: 5px;
  }
</style>

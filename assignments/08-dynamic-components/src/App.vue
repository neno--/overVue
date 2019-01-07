<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br>
        <button class="btn btn-primary" @click="componentName='appBlue'">Load Blue Template</button>
        <button class="btn btn-success" @click="componentName='appGreen'">Load Green Template</button>
        <button class="btn btn-danger" @click="componentName='appRed'">Load Red Template</button>
        <hr>
        <component :is="componentName">some content</component>
      </div>
    </div>
  </div>
</template>

<script>
  import Blue from './components/Blue.vue';
  import Green from './components/Green.vue';
  import Red from './components/Red.vue';
  import Component from "../../../practice/anotherApp/src/Component";

  export default {
    components: {
      Component,
      appBlue: Blue,
      appGreen: Green,
      appRed: Red
    },
    data: function () {
      return {
        componentName: null
      }
    }
  }
</script>

<style>
</style>

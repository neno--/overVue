<template>
  <div>
    <component v-for="data in datas" :index="data">oh hai</component>
  </div>
</template>

<script>

  import Component from './components/Component.vue'

  export default {
    components: {
      'component': Component
    },
    data: function() {
      return {
        datas: [1, 2, 3, 4, 5]
      }
    }
  }
</script>

<style>
</style>

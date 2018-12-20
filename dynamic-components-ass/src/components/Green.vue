<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    created() {
      console.log('created green')
    },
    destroyed() {
      console.log('destroyed green')
    },
    activated() {
      console.log('created green')
    },
    deactivated() {
      console.log('destroyed green')
    }
  }
</script>

<style scoped>
  div {
    border: 1px solid green;
    background-color: lightgreen;
    padding: 30px;
    margin: 20px auto;
    text-align: center
  }
</style>

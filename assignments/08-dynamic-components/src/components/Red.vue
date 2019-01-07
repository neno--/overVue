<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    created() {
      console.log('created red')
    },
    destroyed() {
      console.log('destroyed red')
    }
  }

</script>

<style scoped>
  div {
    border: 1px solid red;
    background-color: lightcoral;
    padding: 30px;
    margin: 20px auto;
    text-align: center
  }
</style>

<template>
  <div>
    Hello from subcomponent
    <button v-if="flag" @click="doSomething">click me</button>
  </div>
</template>

<script>
  export default {
    props: {
      flag: Boolean
    },
    methods: {
      doSomething() {
        console.log("clicked")
        this.$emit('my-event')
      }
    }
  }
</script>

<style scoped>
  div {
    border-style: solid;
    border-color: #ff3f43;
    border-width: 1px;
    float: left;
    margin: 5px;
  }
</style>

<template>
  <div>
    <div
      class="col-lg-3 well bg-white"
      @click="remove">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import EventBus from '../event-bus';

  export default {
    props: {
      index: Number
    },
    methods: {
      remove() {
        console.log('removing quote with index: ' + this.index)
        EventBus.$emit('QUOTE_REMOVED', this.index)
      }
    }

  }
</script>

<style scoped>
  div {
    background: white;
    word-wrap: break-word;
  }
</style>

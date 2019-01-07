<template>
  <div>
    <div
      class="col-lg-3 "
      @click="remove">
      <div class="panel panel-default">
        <div class="panel-body quote">
          <slot></slot>
        </div>
      </div>
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
  .quote {
    font: italic bold 3rem Arizonia, serif;
  }

  .quote:hover {
    background: lightpink;
  }
</style>

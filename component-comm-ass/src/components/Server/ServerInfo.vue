<template>
  <p class="list-group-item col-xs-12 col-sm-6" @click="propagateEvent">
    Server #{{server.id}} ({{server.status}})
  </p>
</template>

<script>
  import EventBus from '../../event-bus';

  export default {
    props: {
      server: Object
    },
    methods: {
      propagateEvent() {
        EventBus.$emit('SERVER_CHANGED', this.server);
      }
    }
  }
</script>

<style>

</style>

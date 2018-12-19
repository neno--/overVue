<template>
  <li class="list-group-item col-xs-12 col-sm-6">
    <p @click="propagateEvent">
      Server #{{server.id}} ({{server.status}})
    </p>
  </li>
</template>

<script>
  import EventBus from '../../event-bus';
  import DirtyBus from '../../dirty-bus';

  export default {
    props: {
      server: Object,
    },
    data: function () {
      return {
        dirtyBus: DirtyBus
      }
    },
    methods: {
      propagateEvent() {
        EventBus.$emit('SERVER_CHANGED', this.server)
        this.dirtyBus.server = this.server
      }
    }
  }
</script>

<style>

</style>

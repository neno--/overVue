<template>
  <div class="col-xs-12 col-sm-6">
    <p v-show="server">Server #{{server.id}} status is {{server.status}}</p>
    <button v-show="server && (server.status != 'Normal')" @click="fix">Fix</button>
  </div>

</template>

<script>
  import EventBus from '../../event-bus';
  import DirtyBus from '../../dirty-bus';

  export default {
    data: function () {
      return {
        server: false,
        dirtyBus: DirtyBus
      }
    },
    mounted() {
      var that = this;
      EventBus.$on('SERVER_CHANGED', function (server) {
          that.server = server
        }
      )
    },
    methods: {
      fix() {
        this.dirtyBus.server.status = 'Normal'
      }
    }
  }
</script>

<style>

</style>

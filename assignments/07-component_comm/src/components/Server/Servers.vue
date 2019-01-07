<template>
  <div class="col-xs-12 col-sm-6">
    <div class="list-group">
      <app-server-info v-for="server in servers" :server="server">
      </app-server-info>
    </div>
  </div>
</template>

<script>
  import ServerInfo from './ServerInfo.vue'

  export default {
    components: {
      'app-server-info': ServerInfo
    },
    data: function () {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'Normal'},
        ],
      }
    }
  }
</script>

<style>

</style>

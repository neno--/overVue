<template>
  <div class="form-group">
    <label for="firstName" class="col-sm-2 control-label">First Name</label>
    <div class="col-sm-4">
      <input type="text" v-model="firstName" class="form-control" id="firstName" placeholder="First Name">
    </div>
    <label for="lastName" class="col-sm-2 control-label">Last Name</label>
    <div class="col-sm-4">
      <input type="text" v-model="lastName" class="form-control" id="lastName" placeholder="Last Name">
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        firstName: '',
        lastName: ''
      }
    },
    watch: {
      lastName() {
        var that = this
        this.$emit('dataChange', function () {
          return that.firstName + ' ' + that.lastName
        }())
      },
      firstName() {
        var that = this
        this.$emit('dataChange', function () {
          return that.firstName + ' ' + that.lastName
        }())
      }
    }
  }
</script>

<style scoped>
</style>

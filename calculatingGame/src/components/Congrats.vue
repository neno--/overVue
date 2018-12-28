<template>
  <div class="col-xs-6 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
    <div class="panel panel-success box">
      <div class="panel-heading text-center info">That's Correct!</div>
      <form>
        <div class="panel-body text-center">
          <button class="btn btn-primary" @click.prevent="$emit('toggle', 'question')">Next Question</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .box {
    height: 159px;
  }
</style>

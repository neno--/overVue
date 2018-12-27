<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-2">
        <br>
        <br>
        <h1 class="text-center">The Super Quiz</h1>
        <hr>
      </div>
    </div>

    <div class="row">
      <question></question>
    </div>

  </div>
</template>

<script>
  import Question from './components/Question'

  export default {
    name: 'app',
    components: {
      question: Question
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>

</style>

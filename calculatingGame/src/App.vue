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

    <div class="row" v-if="displayQuestion">
      <question @toggle="displayQuestion = !displayQuestion"></question>
    </div>
    <div class="row" v-else>
      <congrats @toggle="displayQuestion = !displayQuestion"></congrats>
    </div>
  </div>
</template>

<script>
  import Question from './components/Question'
  import Congrats from './components/Congrats'

  export default {
    name: 'app',
    components: {
      question: Question,
      congrats: Congrats
    },
    data() {
      return {
        displayQuestion: true
      }
    }
  }
</script>

<style>

</style>

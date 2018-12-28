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

    <transition name="rotate">
    <div class="row" v-if="displayQuestion">
      <question @toggle="displayQuestion = !displayQuestion"></question>
    </div>
    </transition>

    <transition name="rotate">
      <div class="row" v-if="!displayQuestion">
        <congrats @toggle="displayQuestion = !displayQuestion"></congrats>
      </div>
    </transition>

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

<style scoped>
  .rotate-enter {
    transform: rotateY(90deg);
  }

  .rotate-enter-active {
    transition: all 500ms ease;
  }
</style>

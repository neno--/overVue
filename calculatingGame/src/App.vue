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

    <transition name="rotate" @after-leave="afterLeave">
      <div class="row" v-if="showQuestion">
        <question @toggle="toggle($event)"></question>
      </div>
    </transition>

    <transition name="rotate" @after-leave="afterLeave">
      <div class="row" v-if="showCongrats">
        <congrats @toggle="toggle($event)"></congrats>
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
        showNext: '',
        showQuestion: true,
        showCongrats: false
      }
    },
    methods: {
      toggle(event) {
        this.showNext = event

        if (this.showNext === 'congrats') {
          this.showQuestion = false
        } else {
          this.showCongrats = false
        }
      },
      afterLeave() {
        if (this.showNext == 'congrats') {
          this.showCongrats = true;
        } else {
          this.showQuestion = true;
        }
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

  .rotate-leave {
  }

  .rotate-leave-active {
    transform: rotateY(90deg);
    transition: all 500ms ease;
  }
</style>

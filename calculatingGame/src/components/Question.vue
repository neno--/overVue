<template>
  <div class="col-xs-6 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4">
    <div class="panel panel-success">
      <div class="panel-heading text-center">What is {{question}}</div>
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-6 text-center">
            <button class="btn btn-primary">{{answers[0]}}</button>
          </div>
          <div class="col-xs-6 text-center">
            <button class="btn btn-primary">{{answers[1]}}</button>
          </div>
        </div>
        <br>
        <div class="row">
          <div class="col-xs-6 text-center">
            <button class="btn btn-primary">{{answers[2]}}</button>
          </div>
          <div class="col-xs-6 text-center">
            <button class="btn btn-primary">{{answers[3]}}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    beforeMount: function () {
      this.prepareNextQuestion()
    },
    data() {
      return {
        a: null,
        b: null,
        answer: null,
        question: '',
        answers: ['A', 'B', '3', 'D']
      }
    },
    methods: {
      prepareNextQuestion() {
        this.a = Math.floor(Math.random() * 101) - 50
        this.b = Math.floor(Math.random() * 101) - 50
        this.answer = this.a + this.b

        if (this.b >= 0) {
          this.question = this.a + ' + ' + this.b
        } else {
          this.question = this.a + ' - ' + (-this.b)
        }

        var i
        for (i = 0; i < 4; i++) {
          this.answers[i] = this.answer + (Math.floor(Math.random() * 5) - 2)
        }

        this.answers[Math.floor(Math.random() * 4)] = this.answer
      }
    }
  }
</script>

<style>

</style>

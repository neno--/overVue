<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12">
        <h3>Quotes Added</h3>
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="70"
               aria-valuemin="0" aria-valuemax="100" style="width:70%">
            70%
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-lg-offset-3">
        <label for="quote">Quote</label>
        <textarea
          class="form-control"
          rows="3"
          id="quote"
          v-model="text"
        ></textarea>
        <div class="text-center">
          <button
            type="button"
            class="btn btn-primary btn-md"
            @click="addQuote">Add Quote
          </button>
        </div>
      </div>
    </div>

    <div class="row">
      <quote
        v-for="(quote, index) in quotes"
        :index="index">{{quote}}
      </quote>
    </div>

    <div class="row">
      <div class="col-lg-12 alert alert-info text-center">Info: Click on a Quote to delete it.</div>
    </div>
  </div>
</template>

<script>
  import QuoteEntry from './components/Quote.vue'
  import EventBus from './event-bus'

  export default {
    components: {
      quote: QuoteEntry
    },
    mounted: function () {
      var that = this
      EventBus.$on('QUOTE_REMOVED', function (index) {
        that.quotes.splice(index, 1);
      })
    },
    data: function () {
      return {
        quotes: ['Just a Quote to start with something!'],
        text: ''
      }
    },
    methods: {
      addQuote(index) {
        console.log('adding quote ' + this.quotes.length)
        if (this.quotes.length === 10) {
          alert('You cannot add any more quotes!')
          return
        }
        this.quotes.push(this.text)
        this.text = ''
      }
    }
  }
</script>

<style>
</style>

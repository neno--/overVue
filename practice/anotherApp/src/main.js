import Vue from 'vue'
import App from './App.vue'
import Component from './Component.vue'

Vue.component('oh-hai', Component);

new Vue({
  el: '#app',
  render: h => h(App)
})

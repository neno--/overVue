import Vue from 'vue'
import App from './App.vue'

Vue.directive('test', {
  bind: function (el, binding, vnode) {
    console.log('in bind method')
    if ((binding.arg == 'click') && (binding.value instanceof Function)) {
      console.log('in bind method: registered handler')
      el.onclick = binding.value
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})

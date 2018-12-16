var vm = new Vue({
    template: "<h1>test</h1>",
    data: {
        text: 'q'
    }
});

vm.$mount();

var x = vm.$el;

document.getElementById('a').appendChild(x);
document.getElementById('b').appendChild(x);
document.getElementById('c').appendChild(x);


new Vue({
    el: '#d',
    template: "<h1>another test</h1>",
    data: {
        text: 'q'
    }
});

Vue.component('my-cmp', {
    data: function () {
        return {
            status: 'oh hai'
        }
    },
    template: '<h1 @click="status = \'just hello\'">{{status}}</h1>'
});

new Vue({el: '#thisOne'});

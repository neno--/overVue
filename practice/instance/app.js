new Vue({
    el: '#firstApp',
    data: {
        firstHello: 'firstHello'
    },
    methods: {
        activate: function () {
            app2.secondHello = 'hihi'
            console.log(app2.secondHello)
            console.log({})
        }
    }
});

var app2 = new Vue({
    data: {
        secondHello: 'secondHello'
    }
});

app2.$mount('#secondApp');

var app3 = new Vue({
    template: '<h1>hello</h1>'
})

app3.$mount()

document.getElementById('3').appendChild(app3.$el)


var thisIsMyData = {
    someData: 42
}

var oneMoreApp = new Vue({
    el: '#oneMoreApp',
    data: thisIsMyData
});


console.log("is this the same? " + (thisIsMyData == oneMoreApp.$data))

thisIsMyData.someData = 33

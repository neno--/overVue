var componentData = {
    data: function () {
        return {
            status: 'template data'
        }
    },
    template: '<h1 @click="status = \'just another hello\'">{{status}}</h1>'
}

// Vue.component('my-cmp', componentData);

var vm = new Vue({
    el: "#lookMaNoHands",
    render : h => h(componentData)
});

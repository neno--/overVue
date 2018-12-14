new Vue({
    el: '#exercise',
    data: {
        firstEffect: "",
        firstFlag: false,
        firstObject: {},
        cssArray: ['one', 'two'],
        cssValues: ['one', 'two'],
        whichClass: "",
        activateClass: true,
        myStyles: "10px solid black",
        increase: "",
        inc: 0
    },
    methods: {
        startEffect: function () {
            console.log('hi there');
            var that = this;
            setInterval(function () {
                console.log('tick');
                if (that.firstEffect === 'highlight') {
                    that.firstEffect = 'shrink'
                } else {
                    that.firstEffect = 'highlight'
                }
                console.log(that.firstEffect);
            }, 2000);
        },
        startEffect1: function () {
            console.log('hi there2');
            var that = this;
            setInterval(function () {
                console.log('tick2');
                that.firstFlag = !that.firstFlag
                that.firstObject = {
                    highlight: that.firstFlag,
                    shrink: !that.firstFlag
                }
                console.log(that.firstFlag);
            }, 2000);
        },
        startProgress: function () {
            var that = this;
            setInterval(function () {
                that.inc += 10
                that.increase = {width: that.inc + 'px'}
            }, 1000)
        }
    },
    computed: {
        bla: function () {
            return this.firstObject
        }
    }
})
;

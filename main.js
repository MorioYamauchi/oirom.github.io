var app = new Vue({
    el: "#app",
    data: {
        message: 'こんにちわ',
        isActive: true,
        color: 'red',
        bg: 'bg-blue',
        counter: 0,
        contentObjects: {
            title: ['SKILL', 'LINK'],
            description: ['aaa', 'bbb']
        }
    },
    computed: {
        classObject: function() {
            return { 
                red: this.isActive,
                'bg-blue': !this.isActive
            }
        }
    },
    methods: {
        countUp: function() {
            this.counter += 1;
        },
        doubleCounterMethod: function() {
            return this.counter *2;
        },
        changeContent: function(event) {
            
        }
    }
});
var app = new Vue({
    el: "#app",
    data: {
        message: 'こんにちわ',
        isActive: true,
        color: 'red',
        bg: 'bg-blue',
        counter: 0,
        title: 'none',
        description: 'none',
        contentObjects: {
            titles: ['SKILL', 'LINK'],
            descriptions: ['aaa', 'bbb']
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
        changeContent: function(_arg, $event) {
            this.counter += 1;
            if (_arg == 'a') {
                this.title = this.contentObjects.titles[0];
                this.description = this.contentObjects.descriptions[0];
            } else {
                this.title = this.contentObjects.titles[1];
                this.description = this.contentObjects.descriptions[1];
            }
            
        },
    }
});
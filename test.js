var app = new Vue({
    el: "#app",
    data: {
        message: 'こんにちわ',
        isActive: true,
        color: 'red',
        bg: 'bg-blue',
        counter: 0,
        title: 'title',
        content: 'content',
        contentObjects: {
            titles: ['SKILL', 'LINK'],
            descriptions: ['aaa', 'bbb']
        },
        studies: [
            { name : 'HTML' },
            { name : 'CSS' },
            { name : 'Vue.js' },
            { name : 'OperatingSystem' }
        ],
        now: "00:00:00"
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
            if (_arg == 'a') {
                this.title = this.contentObjects.titles[0];
                this.content = this.contentObjects.descriptions[0];
            } else if (_arg=='b') {
                this.title = this.contentObjects.titles[1];
                this.content = this.contentObjects.descriptions[1];
            }
        },
        getTime: function() {
            var date = new Date();
            this.now = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }
    }
});
Vue.component('chapter-item', {
    props: ['section'],
    template: '<h2>{{ section.title }}</h2>'
})

new Vue({
    el: "#app",
    data: {
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
        isActive6: false,
        chapter_num: 2,
        chapter: [
            [

            ],
            [
                { id: 0, title: '本マニュアルについて' },
                { id: 1, title: '本マニュアルの構成' }
            ],
            [
                { id: 0, title: '実機で開発する' },
                { id: 1, title: 'シミュレータで開発する' }
            ]
        ]
    },
    methods: {
        active: function (_arg, $event) {
            if (_arg == '1') { 
                this.isActive1 = !this.isActive1
                this.chapter_num = 1
            }
            if (_arg == '2') {
                this.isActive2 = !this.isActive2
                this.chapter_num = 2
            }
            if (_arg == '3') this.isActive3 = !this.isActive3
            if (_arg == '4') this.isActive4 = !this.isActive4
            if (_arg == '5') this.isActive5 = !this.isActive5
            if (_arg == '6') this.isActive6 = !this.isActive6
        
        }
    }
})
Vue.component('chapter-item', {
    props: ['section'],
    template: `
        <div>
            <h2>{{ section.title }}</h2>
            <div v-html="section.content"></div>
        </div>
    `
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
        chapter_num: 0,
        chapter: [
            [

            ],
            [
                { id: 0, title: 'はじめに', content: 'HSRに関するマニュアルは2種類あります。 目的に応じて、閲覧するマニュアルを選択してください。 なお、開発を開始する前には、あらかじめお使いのHSRのユーザマニュアルをお読みください。'},
                { id: 1, title: '本マニュアルについて', content: 'ここはマニュアルについて書かれる予定'},
                { id: 2, title: '本マニュアルの構成', content: 'ここはマニュアルの構成について書かれる予定'}
            ],
            [
                { id: 0, title: '実機で開発する' },
                { id: 1, title: 'シミュレータで開発する' }
            ],
            [
                { id: 0, title: '〇〇〇の概要' },
                { id: 1, title: '〇〇〇の特徴' }
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
            if (_arg == '3') {
                this.isActive3 = !this.isActive3
                this.chapter_num = 3
            }
            if (_arg == '4') this.isActive4 = !this.isActive4
            if (_arg == '5') this.isActive5 = !this.isActive5
            if (_arg == '6') this.isActive6 = !this.isActive6
        
        }
    }
})
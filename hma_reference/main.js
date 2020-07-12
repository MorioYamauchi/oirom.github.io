new Vue({
    el: "#app",
    data: {
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
        isActive6: false,
    
    },  
    methods: {
        active: function (_arg, $event) {
            if (_arg == '1') this.isActive1 = !this.isActive1
            if (_arg == '2') this.isActive2 = !this.isActive2
            if (_arg == '3') this.isActive3 = !this.isActive3
            if (_arg == '4') this.isActive4 = !this.isActive4
            if (_arg == '5') this.isActive5 = !this.isActive5
            if (_arg == '6') this.isActive6 = !this.isActive6
        
        }
    }
})
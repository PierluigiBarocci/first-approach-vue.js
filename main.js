var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        button: 'Nascondi',
        isVisible: true
    },
    methods: {
        toggleTitle() {
            if (this.isVisible) {
                this.isVisible = false;
                this.button = 'Mostra'
            } else {
                this.isVisible = true;
                this.button = 'Nascondi'
            }
        }
    }
})

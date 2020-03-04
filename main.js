var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        button: 'Nascondi',
        button_color: 'Cambia Colore',
        isVisible: true,
        isDark: true,
        hover_message: 'Vue.js è magnifico!',
        items : [
            {
                text: 'Mele'
            },
            {
                text: 'Carote'
            },
            {
                text: 'Carne'
            },
        ],
        newItem : '',
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
        },
        toggleColor() {
            this.isDark = !this.isDark;
        },
        addItem() {
            this.items.push({
                text: this.newItem
            });
            this.newItem = '';
        }
    }
})

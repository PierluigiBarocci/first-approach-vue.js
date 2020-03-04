var app = new Vue({
    el: '#app',
    data: {
        minNumber: '',
        maxNumber: '',
        quantity: '',
        newNumber: '',
        numbers :[]
    },
    methods: {
        getNUmbers(maxNumber, minNumber, quantity) {
            // svuoto array
            this.numbers = [];
            for (var i = 0; i < quantity; i++) {
                // funzione per generare numeri random estremi inclusi
                newNumber =  Math.floor((Math.random() * (this.maxNumber - this.minNumber + 1)) + this.minNumber);
                // ad ogni passaggio, pusho il numero nell'array
                this.numbers.push(newNumber);
                // azzero newNumber
                this.newNumber = ''
            };
        }
    }
})
// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello World!',
//         button: 'Nascondi',
//         button_color: 'Cambia Colore',
//         isVisible: true,
//         isDark: true,
//         hover_message: 'Vue.js è magnifico!',
//         items : [
//             {
//                 text: 'Mele'
//             },
//             {
//                 text: 'Carote'
//             },
//             {
//                 text: 'Carne'
//             },
//         ],
//         newItem : '',
//     },
//     methods: {
//         toggleTitle() {
//             if (this.isVisible) {
//                 this.isVisible = false;
//                 this.button = 'Mostra'
//             } else {
//                 this.isVisible = true;
//                 this.button = 'Nascondi'
//             }
//         },
//         toggleColor() {
//             this.isDark = !this.isDark;
//         },
//         addItem() {
//             this.items.push({
//                 text: this.newItem
//             });
//             this.newItem = '';
//         }
//     }
// })

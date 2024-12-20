const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            tettore: 'potatt',
            fattore: 'high',
            vmodel: '',
            vbind: '',
            cardImmagine: {
                img: 'img/cardImg.webp',
                text: 'i quadrati sono tondi'
            },
            classBtn: 'btn-outline-light',
            dadoMio: 0,
            dadoSuo: 0,
            risultato: '',
            loggato: false,
            password: '',
            pError: false,
            listTo:  [
                {text:'banana', done: false},
                {text:'il chiappa', done: false},
                {text:'Alluce', done: false}
            ],
            currentIndex: 0,
            timerSlider: null,
            slider: {
                img: [
                    'https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/639a7b072f9d4/clean.jpg',
                    'https://cdn.marvel.com/u/prod/marvel/i/mg/c/40/633cefa069d3b/clean.jpg',
                    'https://cdn.marvel.com/u/prod/marvel/i/mg/d/e0/652991585b432/clean.jpg'
                ],
                text: 'slider',
                text2: 'banana'
            },
            timerMessage: null,
            messaggi: [
                {
                    text: 'Hey',
                    date: '12/13/24',
                    me: true
                },{
                    text: 'Hey',
                    date: '12/13/24',
                    me: false
                }
            ],
            newMessage: {
                text: '',
                date: '12/13/24',
            }
        }
    },
    methods: {
        getRandomNumber: function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        onBtnClick: function () {
            if ( this.cardImmagine.img == 'img/cardImg.webp'){
                this.cardImmagine.img = 'img/cardImg1.jpg'
            } else {
                this.cardImmagine.img = 'img/cardImg.webp'
            };
            this.onBtnClickColorChange()
        },
        onBtnClickColorChange: function (){
            if ( this.classBtn == 'btn-outline-light'){
                this.classBtn = 'btn-primary'
            } else {
                this.classBtn = 'btn-outline-light'
            }
        },
        startDiceGame: function (){
            this.dadoMio = this.getRandomNumber(1,6);
            this.dadoSuo = this.getRandomNumber(1,6);
            if( this.dadoMio > this.dadoSuo) {
                this.risultato = 'Hai vinto'
            } else if ( this.dadoMio < this.dadoSuo) {
                this.risultato = 'Ha vinto'
            } else {
                this.risultato = 'Pareggio'
            }
        },
        onClickEntra: function (){
            if ( this.password === '1234'){
                this.loggato = true;
                this.pError = false
            } else {
                 this.pError = true
            }
            this.password = ''
        },
        onClickEsci: function (){
            this.loggato = false
        },
        clickNext: function (){
            this.currentIndex ++;
            if (this.currentIndex == this.slider.img.length){
                this.currentIndex = 0
            }
        },
        clickPrev: function (){
            this.currentIndex --;
            if (this.currentIndex = 0){
                this.currentIndex = this.currentIndex.length
            }
        },
        autoplay: function (){
            this.timerSlider = setInterval(this.clickNext, 2500)
        },
        stopAutoplay: function (){
            clearInterval(this.timerSlider)
        },
        onClickSendMessage: function (){
            this.messaggi.push({
                text: this.newMessage.text,
                date: this.newMessage.date,
                me: true
            });
            this.MessAnswer()
        },
        answer: function () {
          this.messaggi.push({
            text: 'ok',
            date: '12/13/24',
            me: false
          })
        },
        MessAnswer: function () {
            this.timerMessage = setTimeout(this.answer, 3000),
            this.newMessage.text = ''
        },

        
    },
    mounted() {
        this.autoplay()
    },
}).mount('#app')
const { createApp } = Vue;

const app = createApp ({
    data() {
        return {
            currentImgIndex:0,
            movie: {
                img: [  'https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/639a7b072f9d4/clean.jpg',
                        'https://freshcomics.s3.amazonaws.com/issue_covers/APR230872.jpg',
                        'https://cdn.marvel.com/u/prod/marvel/i/mg/c/40/633cefa069d3b/clean.jpg',
                        'https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/63613a08bf8e5/clean.jpg',
                        'https://cdn.marvel.com/u/prod/marvel/i/mg/d/e0/652991585b432/clean.jpg'
                ],
                title: 'The Mandalorian',
                category: 'Action',
                length: '120' 
            }

        };
    },
    methods: {
        onClickNext(){
            if(this.currentImgIndex === this.movie.img.length - 1){
                this.currentImgIndex = 0;
            } else {
                this.currentImgIndex++;
            }
        },
        onClickPrev(){
            if(this.currentImgIndex === 0){
                this.currentImgIndex = this.movie.img.length - 1;
            } else {
                this.currentImgIndex--
            }
        },
        onClickThumbImg(){
            this.currentImgIndex = 0
        },
        
    }
}).mount('#app');
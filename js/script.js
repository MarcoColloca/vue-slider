const {createApp} = Vue

createApp({
    data(){
        return {
            message: 'Ciao',
            currentObjectIndex: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            activeElement: 'active',
            intervalId: null,
        }
    },

    mounted(){
        this.intervalId = setInterval(() => {
            if(this.currentObjectIndex !== this.slides.length - 1){
                this.currentObjectIndex++;
            }else{
                this.currentObjectIndex = 0;
            }

        }, 3000);               
    },

    methods:{

        startSlider() {
            if (this.intervalId === null) {
                // Fammi partire l'autointerval
                console.log('Riparte');
                this.intervalId = setInterval(() => {
                    if(this.currentObjectIndex !== this.slides.length - 1){
                        this.currentObjectIndex++;
                    }else{
                        this.currentObjectIndex = 0;
                    }
        
                }, 3000);
            }
        },

        pauseSlider(){
            if (this.intervalId !== null) {
                clearInterval(this.intervalId);
                this.intervalId = null;
            }
        },

        prevSlide(){
            if(this.currentObjectIndex === 0){
                this.currentObjectIndex = this.slides.length - 1
            } else {
                this.currentObjectIndex--
            }
        },
    },
}).mount('#app')











/*

const slides = [
    {
    image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(slides);
*/
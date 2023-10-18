import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
    direction: "horizontal",
    loop: true,

    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },

    autoplay: {
        delay: 6000
    }
  });


const typed = new Typed('.typed', {
    strings: [
    "<i class='maqescribir'>¡Hola! Soy</i>",
    "<i class='maqescribir'>Hi! I'm</i>"
],
stringsElement: '#cadenas-texto',
typeSpeed:75,
startDelay: 300,
backSpeed:75,
smartBackspace:true,
shuffle:false,
backDelay:1500,
loop:true,
loopCount:false,
showCursor:true,
cursorChar:'|',
contentType:'html',
});




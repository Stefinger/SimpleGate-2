
// #################################### NAVBAR ####################################

$(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
      $(".navbar").toggleClass("collapsed-bg");
    });
  });

// #################################### LANGUAGE ####################################

function toggleLanguage() {
    var currentLanguageFlag = document.getElementById("currentLanguageFlag");
    var currentLanguage = currentLanguageFlag.getAttribute("data-language");

    // Přepínání mezi angličtinou a češtinou
    var newLanguage = currentLanguage === "english" ? "czech" : "english";
    var newLanguageText = currentLanguage === "english" ? "Czech" : "English";

    // Aktualizace vlajky a textu jazyka
    currentLanguageFlag.setAttribute("data-language", newLanguage);
    currentLanguageFlag.innerHTML = `<img src="/images/${newLanguage}.png" alt="" /><span>${newLanguageText}</span>`;
}

// #################################### CAROUSEL ####################################

const seekersContainer = document.querySelector('.seekers-container');
const seekersControlsContainer = document.querySelector('.seekers-controls');
const seekersControls = ['previous','next'];
const seekersItems = document.querySelectorAll('.seekers-item');

class Carousel{
    
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(el => {
            el.classList.remove('seekers-item-1');
            el.classList.remove('seekers-item-2');
            el.classList.remove('seekers-item-3');
            el.classList.remove('seekers-item-4');
            el.classList.remove('seekers-item-5');

        });

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`seekers-item-${i+1}`)
        });
    }

    setCurrentState(direction){
        if (direction.className == 'seekers-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            seekersControlsContainer.appendChild(document.createElement('button')).className = `seekers-controls-${control}`;
        });
    }

    useControls(){
        const triggers = [...seekersControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(seekersContainer, seekersItems, seekersControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

// #################################### GSAP ####################################

let tl = gsap.timeline({ defaults: { Easings: Expo.EaseOut } });

tl.from("header, .navbar", {
    scale: 0,
    duration: 2,
    opacity: 0,
    ease: Expo.EaseOut,
}).to(".header-text",
    {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        y: -100,
        stagger: 0.3,
        duration: 1,
        delay: 1.5,
    },
    "-=2.9"
);




gsap.registerPlugin(ScrollTrigger);

gsap.to(".choice-simple-gate-title",{
    scrollTrigger: {
        triger: ".choice-box-1",
        start:"600 center",
        end:"1200 center",
        toggleActions: "play none", 
    },
    opacity:1 ,
    duration: 3,
    
 })

gsap.to(".choice-box-1",{
    scrollTrigger: {
        triger: ".choice-box-1",
        start:"800 center",
        end:"1200 center",
        toggleActions: "play none", 
    },
    x:400,
    opacity:1 ,
    duration:1,
    
 })

gsap.to(".choice-box-2",{
   scrollTrigger: {
       triger: ".choice-box-2",
       start:"800 center",
       end:"1200 center",
       toggleActions: "play none", 
   },
   x:800,
   opacity:1 ,
   duration:1.5,
   delay: 1,
   
})

gsap.to(".choice-box-3",{
    scrollTrigger: {
        triger: ".choice-box-3",
        start:"800 center",
        end:"1200 center",
        toggleActions: "play none", 
    },
    x:1200,
    opacity:1 ,
    duration:1.5,
    delay: 2.5,
    
 })
 

 gsap.to(".how-works-box-1",{
    scrollTrigger: {
        triger: ".how-works-box-1",
        start:"1500 center",
        end:"1900 center",
        toggleActions: "play none", 
    },
    y:600,
    opacity:1 ,
    duration:1.5,
 })

 gsap.to(".how-works-box-2",{
    scrollTrigger: {
        triger: ".how-works-box-2",
        start:"1500 center",
        end:"1900 center",
        toggleActions: "play none", 
    },
    y:-500,
    opacity:1 ,
    duration:1.5,
 })





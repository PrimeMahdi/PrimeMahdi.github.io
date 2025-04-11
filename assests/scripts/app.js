let searchInput = document.querySelector('.search-input');
let slides = document.querySelectorAll(".slide");
let slidesContainer = document.querySelector(".slides-container");

window.addEventListener("keypress",(e)=>{
    if(e.key === "o"){
        searchInput.focus();
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const image = document.querySelector('.logo2');

    image.addEventListener('click', function() {
        this.classList.toggle('clicked'); // Toggle the 'clicked' class
    });
});

let currentSlide = -1;
let NextSlide = function(){
    if(currentSlide < 5){
        currentSlide ++;
    }else {
    currentSlide = 0;
    }
    try {
        if(currentSlide > 0){
            slides[currentSlide - 1].classList.remove("flex5")
        } else {
            slides[5].classList.remove("flex5")
        }
    } catch(error){
        
    }
    slides[currentSlide].classList.add("flex5")
}
setInterval(NextSlide,3000)
slidesContainer.addEventListener("mouseenter", () => {
    slides[currentSlide].classList.remove("flex5");
});

slidesContainer.addEventListener("mouseleave", () => {
    slides[currentSlide].classList.add("flex5");
});

let copy = document.querySelector("#copy");
let navBar = document.querySelector(".bluring");
let LIs = document.querySelectorAll(".navLi")

copy.addEventListener("click",()=>{
    navigator.clipboard.writeText("play.NBLG.ir")
})
window.addEventListener("scroll",()=>{
    let scrollPos = window.scrollY;
    if (scrollPos > 1){
        navBar.classList.add("background");
        for(let i = 0 ; i < 4 ; i++){
            LIs[i].classList.remove("colorWhite")
            LIs[i].classList.add("colorPurple")
        }
    }else{
        navBar.classList.remove("background");
        for(let i = 0 ; i < 4 ; i++){
            LIs[i].classList.add("colorWhite")
            LIs[i].classList.remove("colorPurple")
        }
    }
})

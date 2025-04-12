let buttons = document.querySelectorAll(".product-tabs-header button");
let contents = document.querySelectorAll(".product-tabs-content div");

contents[0].classList.add("active-tab");
buttons[0].classList.add("active-button");

for(let i = 0 ; i < 3 ; i++){
    buttons[i].addEventListener("click",()=>{
        for(let i = 0; i < 3 ; i++){
            buttons[i].classList.remove("active-button");
            contents[i].classList.remove("active-tab");
        }
        contents[i].classList.add("active-tab");
        buttons[i].classList.add("active-button");
    })
}

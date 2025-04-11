let input = document.querySelector(".product-number");
let minus = document.querySelector(".minus");
let plus = document.querySelector(".plus");
input.value = 1;
minus.addEventListener("click",()=>{
    input.value --;
});
plus.addEventListener("click",()=>{
    input.value ++;
})
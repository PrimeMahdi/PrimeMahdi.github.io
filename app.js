let face = document.getElementById("face");
let input = document.getElementById("pw");
input.addEventListener("focus",function(){
    face.innerText = "X-X"
})
input.addEventListener("blur",function(){
    face.innerText = "0-0"
})
let searchInput = document.querySelector('.search-input');
let categoriesButton = document.querySelector(".categories-li");
let categoriesList = document.querySelector(".categories-list");
let categoriesListItems = categoriesList.children;
window.addEventListener("keypress",(e)=>{
    if(e.key === "o"){
        searchInput.focus();
    }
});
categoriesButton.addEventListener("mouseenter",()=>{
    categoriesList.style.transform = "translateY(0)";
});
categoriesButton.addEventListener("mouseleave",()=>{
    categoriesList.style.transform = "translateY(-200px)";
    console.log("leaved");
});
categoriesList.addEventListener("mouseenter",()=>{
    categoriesList.style.transform = "translateY(0)";
});
categoriesList.addEventListener("mouseleave",()=>{
    console.log("leaved");
    categoriesList.style.transform = "translateY(-200px)";
});
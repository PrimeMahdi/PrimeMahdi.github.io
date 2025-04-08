let searchInput = document.querySelector('.search-input');
window.addEventListener("keypress",(e)=>{
    if(e.key === "o"){
        searchInput.focus();
    }
});

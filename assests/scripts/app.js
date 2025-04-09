let searchInput = document.querySelector('.search-input');
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
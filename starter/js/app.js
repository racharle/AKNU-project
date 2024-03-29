function init (){
    const hamburger = document.querySelector(".hamburger");
    const closeButton = document.querySelector(".close-button");
    const sidebar = document.querySelector(".sidebar-container");
    
    const openSidebar = function () {
        sidebar.classList.add("show-sidebar");
        console.log(sidebar.classList)
        };
    
    const close = function () {
        sidebar.classList.remove("show-sidebar");
        };
    
    hamburger.addEventListener("click", openSidebar);
    sidebar.addEventListener("click", close)
}
init();

function nav(){
const navbar = document.querySelector(".nav-container");
window.addEventListener("scroll", function (){
    const scrollNumber = window.scrollY;
    const targetNumber = window.innerWidth >= 992 ? 70 :50;
    if(scrollNumber >= targetNumber){
        navbar.classList.add("sticky-nav");
    }
        else{
            navbar.classList.remove("sticky-nav");
        }
    });
}
nav();
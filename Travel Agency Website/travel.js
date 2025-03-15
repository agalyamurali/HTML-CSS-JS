var menuBtn = document.querySelector(".menu_btn")
var nav_bar = document.querySelector(".navbar-links")

menuBtn.addEventListener("click",function(){
    nav_bar.classList.toggle("mobile_menu");

})
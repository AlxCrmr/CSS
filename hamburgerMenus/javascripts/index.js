/* ========== Menu 1 ========== */
document.querySelector(".menu1").addEventListener("click", function() {
    icon = document.getElementsByClassName("toggle-icon");
    for(var i = 0; i < icon.length; i++){
        icon[i].classList.toggle("show");
    }
});

/* ========== Menu 2 ========== */
const menu2 = document.querySelector(".menu2");
const menuBox = document.querySelector(".menu-box");
menu2.addEventListener("click", function() {
    menu2.classList.toggle("active");
    menuBox.classList.toggle("show");
    menuBox.classList.toggle("active");
});

/* ========== Menu 3 ========== */
const menu3= document.querySelector(".menu3");
const menuBox3 = document.querySelector(".menu-box3");
menu3.addEventListener("click", function() {
    menu3.classList.toggle("hide");
    menuBox3.classList.toggle("full-menu");
});

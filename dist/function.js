const menu = document.querySelector(".menu");
const abrirMenu = document.querySelector(".open-menu");
const cerrarMenu = document.querySelector(".close-menu");

function toggleMenu(){
    //Si el menu esta abierto, que lo cuerre y viceversa
    menu.classList.toggle("menu_opened");
}

abrirMenu.addEventListener("click", toggleMenu);
cerrarMenu.addEventListener("click", toggleMenu);

//Para que el menu se cierre cuando presionamos un boton
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener("click", function(){
        menu.classList.remove("menu_opened");
    })
})
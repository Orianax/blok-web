console.log("hi")

var hamburgerMenu = document.querySelector(".hamburgermenu");
var sluitenMenu = document.querySelector(".sluiten");
var navigatie = document.querySelector(".onzichtbaar");

var fotoOutfits = document.querySelector(".vieroutfits")

hamburgerMenu.addEventListener("click", toggleMenu)
sluitenMenu.addEventListener("click", toggleMenu)

console.log("menu")

function toggleMenu() {
    console.log("menu")
    navigatie.classList.toggle("tevoorschijn");
}



function fotoStraat() {
    fotoOutfits.src = "./images/domfoto2.png"
}

fotoOutfits.addEventListener("click", fotoStraat)
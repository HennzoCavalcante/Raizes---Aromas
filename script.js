//Menu de Hamburguer
let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.getElementById("icone-x")
let body = document.getElementsByTagName("body")
let sombra = document.getElementById("sombra")


function abreFechaMenu() {
    //Se o menu está fechado
    if (window.getComputedStyle(menu).right == "-210px") {
        //Abrir menu
        menu.style.right = "120px"
        
        //Mostrar icone x
        iconeX.style.display = "inline"
        
        //Esconder icone barras 
        iconeBarras.style.display = "none"
        
        sombra.style.right = "-40px"
    } else {
        //Fechar o menu
        menu.style.right = "-210px"
        
        // Esconder icone X
        iconeX.style.display = "none"
        
        // Mostrar icone barras
        iconeBarras.style.display = "inline"
        
        sombra.style.right = "-90vw"
    }
}

onresize = () => {
    if (window.getComputedStyle(menu).right == "-210px") {
        // Mostrar icone X
        iconeX.style.display = "inline"
    }
    else{
        // Esconder icone barras
        iconeBarras.style.display = "none"
    }
}

const track = document.getElementById("track");
const prevBtn = document.getElementById("voltar");
const nextBtn = document.getElementById("proximo");

const totalSlides = document.querySelectorAll('.carousel-slide').length;
const visibleSlides = 3;
let index = 0;

function updateCarousel() {
    const slideWidth = track.children[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    index++;

    if (index > totalSlides - visibleSlides) {
        index = 0;
    }

    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    index--;

    if (index < 0) {
        index = totalSlides - visibleSlides;
    }

    updateCarousel();
});


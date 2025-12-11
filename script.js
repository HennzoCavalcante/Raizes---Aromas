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
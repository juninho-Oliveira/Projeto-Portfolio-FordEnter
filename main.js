var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon')
var IconeMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function(){

    if (IconeMenu.getAttribute("src") == '/imagem/circulo.png') {
        IconeMenu.setAttribute("src", '/imagem/menu hamburguer.png');
    }else {
        IconeMenu.setAttribute("src", '/imagem/circulo.png');
    }
    
    menu.classList.toggle('active');
})
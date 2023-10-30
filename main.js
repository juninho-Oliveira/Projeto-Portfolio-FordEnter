// Seleciona o elemento do menu na página
var menu = document.querySelector('nav ul');

// Seleciona o ícone do menu na página
var menuBar = document.querySelector('nav .menu-icon')

// Seleciona a imagem do ícone do menu na página
var IconeMenu = document.querySelector('nav .menu-icon img');

// Adiciona um evento de clique ao ícone do menu
menuBar.addEventListener('click', function(){

    // Verifica se a imagem atual do ícone do menu é a imagem do círculo
    if (IconeMenu.getAttribute("src") == '/imagem/circulo.png') {
        // Se for, muda a imagem para a imagem do menu hamburguer
        IconeMenu.setAttribute("src", '/imagem/menu hamburguer.png');
    } else {
        // Se não for, muda a imagem para a imagem do círculo
        IconeMenu.setAttribute("src", '/imagem/circulo.png');
    }
    
    // Alterna a classe 'active' no menu, o que provavelmente altera sua visibilidade na página
    menu.classList.toggle('active');
})

// Seleciona todos os itens da lista no menu
var itensLista = document.querySelectorAll('nav ul li');

// Adiciona um evento de clique a cada item da lista
for (var i = 0; i < itensLista.length; i++) {
  itensLista[i].addEventListener('click', function() {
    // Quando um item da lista é clicado, remove a classe 'active' do menu,
    // o que provavelmente faz com que ele desapareça da página
    menu.classList.remove('active');
    
    // Muda a imagem do ícone do menu de volta para a imagem do menu hamburguer
    IconeMenu.setAttribute("src", '/imagem/menu hamburguer.png');
  });
}

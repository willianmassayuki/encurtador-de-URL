const botaoMenu = document.querySelector('#botao-menu')
const menu = document.querySelector('.menu')

botaoMenu.addEventListener('click', () => {
    if (menu.classList.contains('inativo')) {    
        menu.classList.replace('inativo', 'menu-ativo')
    }else{
        menu.classList.replace('menu-ativo', 'inativo')
    }    
})
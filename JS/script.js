//Código para rolagem do menu
const menu = document.querySelector('nav');

function activeScroll(){
    menu.classList.toggle('ativo',scrollY>20);
}
window.addEventListener('scroll',activeScroll);


//Código para fazer a animação no botão
var btn = document.querySelector(".btn-primario")

btn.onmousemove = function(e){
    var x = e.pageX - btn.offsetLeft;
    var y = e.pageY - btn.offsetTop;
    
    btn.style.setProperty('--eixoX', x + 'px')
    btn.style.setProperty('--eixoY', y + 'px')
}

//Código para menu hamburguer funcionar
const hamburger = document.querySelector(".hamburguer");
const ul = document.querySelector(".menu-lista");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    ul.classList.toggle("active");

})
const iconMenuMobil = document.querySelector('#hamburguer');
const iconCloseMobil = document.querySelector('#close');
const asideMenuMobil = document.querySelector('#aside');

iconMenuMobil.addEventListener('click', showMenu)
iconCloseMobil.addEventListener('click', hiddenMenu);

function showMenu(){
    asideMenuMobil.classList.toggle('inactive')
}



function hiddenMenu(){
    asideMenuMobil.classList.add('inactive')
}


let ubicacionPrincipal = window.pageYOffset;
window.onscroll= function(){
    let desplasamientoActual = window.pageYOffset;
    if(ubicacionPrincipal >= desplasamientoActual){
        this.document.querySelector('.header').style.top = '0';
    }
    else{
        document.querySelector('.header').style.top = '-100px';
    }
    ubicacionPrincipal = desplasamientoActual;
}
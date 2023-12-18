 
const menu = document.querySelector(".nav-principal");
const btn = document.querySelector(".burger");
const acceuil = document.querySelector('.prest');

acceuil.style.opacity = 1;
menu.style.opacity = 0;
btn.addEventListener('click', function(){
    if(acceuil.style.opacity == 1 && menu.style.opacity == 0){
        acceuil.style.opacity = 0;
        menu.style.opacity = 1;
    }
    else{
        acceuil.style.opacity = 1;
        menu.style.opacity = 0;
    }
});
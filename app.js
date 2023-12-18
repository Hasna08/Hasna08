 
const menu = document.querySelector(".nav-principal");
const btn = document.querySelector(".burger");
const acceuil = document.querySelector('.prest');

// acceuil.style.opacity = 1;
// menu.style.opacity = 0;
btn.addEventListener('click', function(){
    acceuil.classList.toggle('hidden'); // Toggle la classe 'hidden' pour cacher ou afficher la navbar
});

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden'); // Toggle la classe 'hidden' pour cacher ou afficher le contenu à propos
})
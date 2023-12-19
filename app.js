 
const menu = document.querySelector(".nav-principal");
const btn = document.querySelector(".burger");
const acceuil = document.querySelector('.prest');
const menuLink = document.querySelector(".menu")

// acceuil.style.opacity = 1;
// menu.style.opacity = 0;
btn.addEventListener('click', function(){
    acceuil.classList.toggle('hidden'); 
});

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden'); 
})

menuLink.addEventListener('click', function() {
    menuLink.classList.toggle('hidden'); // Toggle la classe 'hidden' pour cacher ou afficher le bouton "En savoir plus"
  });



/*Fonction pour cacher ou montrer list-nav en fonction du click sur le bouton hamburger*/


const btnMenu = document.querySelector('.hamburger-logo-menu');

const menu=document.querySelector('.liste-nav');


btnMenu.addEventListener('click',()=>{
    menu.classList.toggle('active');
})

const allLinks=document.querySelectorAll('.item-nav');

allLinks.forEach(item=>{
    item.addEventListener('click',()=>menu.classList.toggle('active'));
})
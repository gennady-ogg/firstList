

//-- навигация
/*const toggleMenu = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
toggleMenu.onclick = function(){
   toggleMenu.classList.toggle('active');
   navigation.classList.toggle('active');
}*/

let menutoggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
menutoggle.onclick = function(){
   menutoggle.classList.toggle('active');
   navigation.classList.toggle('active');
}

let side1 = document.getElementById('side1');
let side2 = document.getElementById('side2');

window.addEventListener('scroll', function(){
   side1.style.left = -window.pageYOffset+'px';
   side2.style.left = window.pageYOffset+'px';
})

let menuToggle = document.querySelector('.menuToggle');
let body = document.querySelector('body');

menuToggle.onclick = function(){
   body.classList.toggle('dark');
   menuToggle.classList.toggle('active');
}
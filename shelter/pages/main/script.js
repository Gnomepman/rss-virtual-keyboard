let menuActivate = document.getElementById('menu-open');
let menuDeactivate = document.getElementById('menu-close');
let menu = document.getElementById('menu');

menuActivate.addEventListener('click', function(){
    menu.classList.toggle('activate');
});

menuDeactivate.addEventListener('click', function(){
    menu.classList.toggle('activate');
});

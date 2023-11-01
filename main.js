// nav menu queries
let navbar = document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// cart item list
let cartItem = document.querySelector(".cart-items-container");

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

// form search
let searchForm = document.querySelector(".search-form");

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// scroll top
window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scroll-top');
    scroll.classList.toggle("active", window.scrollY > 500);
})
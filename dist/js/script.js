const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.scale__progress');
const values = document.querySelectorAll('.scale__value');

counters.forEach((item, i) => values[i].style.width = item.textContent);
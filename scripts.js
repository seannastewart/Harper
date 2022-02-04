const navElement = document.querySelector('nav');
const ulElement = document.querySelector('ul');
const menuIcon = document.querySelector('i');



navElement.addEventListener("click", function (event) {

    if (event.target.tagName === 'I') {

        ulElement.classList.toggle('mobileNav');
    }

});

const formElement = document.querySelector('form');
const buttonElement = document.querySelector('button');


formElement.addEventListener('submit', function (event) {

    event.preventDefault();
    buttonElement.classList.add('submitted')
    buttonElement.textContent = "Submitted"
});


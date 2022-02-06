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
const nameElement = document.getElementById('name');
const emailElement = document.getElementById('email');
const messageElement = document.getElementById('message');


formElement.addEventListener('submit', function (event) {

    event.preventDefault();
    buttonElement.classList.add('submitted');
    buttonElement.textContent = "Submitted";

    if (nameElement.value == '') {
        nameElement.classList.add('errorBorder');
    }
    if (emailElement.value == '') {
        emailElement.classList.add('errorBorder');
    }
    if (messageElement.value == '') {
        messageElement.classList.add('errorBorder');
    }

});


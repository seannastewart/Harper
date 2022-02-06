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
const inputElement = document.getElementsByTagName('INPUT');
const messageElement = document.querySelector('textarea');


formElement.addEventListener('submit', function (event) {

    event.preventDefault();


    if (inputElement.email.value == '') {
        inputElement.email.classList.add('errorBorder');
    }
    if (inputElement.name.value == '') {
        inputElement.name.classList.add('errorBorder');
    }
    if (messageElement.value == '') {
        messageElement.classList.add('errorBorder');
    }
    else {
        buttonElement.classList.add('submitted');
        buttonElement.textContent = "Submitted";
        messageElement.classList.remove('errorBorder');
        inputElement.name.classList.remove('errorBorder');
        inputElement.email.classList.remove('errorBorder');
    }
});


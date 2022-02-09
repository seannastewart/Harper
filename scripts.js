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
const errorMessage = document.getElementsByClassName('errorMessage');


formElement.addEventListener('submit', function (event) {

    event.preventDefault();

    if (messageElement.value !== '' && inputElement.name.value !== '' && inputElement.email.value !== '') {
        buttonElement.classList.add('submitted');
        buttonElement.textContent = "Submitted";
        messageElement.classList.remove('errorBorder');
        inputElement.name.classList.remove('errorBorder');
        inputElement.email.classList.remove('errorBorder');
        document.querySelector('.errorMessage').innerHTML = `<p></p>`
    }
    if (inputElement.email.value === '') {
        inputElement.email.classList.add('errorBorder');
        document.querySelector('.errorMessage').innerHTML = `<p> Please complete all fields</p>`
    }
    if (inputElement.name.value === '') {
        inputElement.name.classList.add('errorBorder');
        document.querySelector('.errorMessage').innerHTML = `<p> Please complete all fields</p>`
    }
    if (messageElement.value === '') {
        messageElement.classList.add('errorBorder');
        document.querySelector('.errorMessage').innerHTML = `<p> Please complete all fields</p>`
    }

});


const navElement = document.querySelector('nav');
const ulElement = document.querySelector('ul');
const menuIcon = document.querySelector('i');
console.log(menuIcon)


navElement.addEventListener("click", function (event) {

    if (event.target.tagName === 'I') {
        // tasks to perform
        console.log('wefwfwg');
        ulElement.classList.toggle('mobileNav');
    }

});



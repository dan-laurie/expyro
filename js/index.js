document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('.hamburger-menu').classList.add('open-menu');
});

document.querySelector('.cancel').addEventListener('click', function () {
    document.querySelector('.hamburger-menu').classList.remove('open-menu');
});
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__list');

navToggle.addEventListener('click', () => {
    console.log("cliked");
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log("cliked");
        document.body.classList.remove('nav-open');
    })
})
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelector('section');
let navLinks = document.querySelector('header nav a');


windows.onscroll = () => {
    section.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(to >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href"=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () =>{
    maunIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}
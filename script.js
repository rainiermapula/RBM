let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');




        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};




document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector('.login form');
    const portfolio = document.getElementById('portfolio');
    const loginSection = document.getElementById('login');

    // Basic login system
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === "admin" && password === "1234") {
            // Hide login, show portfolio
            loginSection.style.display = "none";
            portfolio.style.display = "block";

            // Optional: Scroll to top or home
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            alert("Invalid username or password.");
        }
    });



    const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', () => {
    // Hide the portfolio
    document.getElementById('portfolio').style.display = "none";

    // Show the login section again
    document.getElementById('login').style.display = "flex";

    // Optional: Reset fields
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";

    // Scroll to top or login
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



    // Your existing nav/menu/sticky header/scroll code
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        let top = window.scrollY;

        sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        let header = document.querySelector('header');
        if (header) {
            header.classList.toggle('sticky', window.scrollY > 100);
        }

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
});


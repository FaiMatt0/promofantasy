document.addEventListener("DOMContentLoaded", function () {
    const domande = document.querySelectorAll(".domanda");

    domande.forEach((domanda) => {
        domanda.addEventListener("click", function () {
            // Chiudi tutte le altre risposte
            domande.forEach((d) => {
                if (d !== domanda) {
                    d.classList.remove("active");
                    d.nextElementSibling.classList.remove("visible");
                }
            });

            // Apri/chiudi la risposta corrente
            domanda.classList.toggle("active");
            domanda.nextElementSibling.classList.toggle("visible");
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('scroll', function () {
        const headerImg = document.querySelector('header img');
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            headerImg.classList.add('small');
        } else {
            headerImg.classList.remove('small');
        }
    });
});

// Aggiungi questo script per gestire l'apertura/chiusura del menu mobile
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});
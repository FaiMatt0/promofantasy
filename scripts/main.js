// Aggiungi interattività per evidenziare l'elemento selezionato
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const piani = document.querySelectorAll(".pricing .piano");

    piani.forEach((piano) => {
        piano.addEventListener("mouseenter", () => {
            const index = Number(piano.dataset.index);
            const shifts = [
                [0, 10, 10, 10, 10], // Primo piano
                [-10, 0, 10, 10, 10], // Secondo piano
                [-10, -10, 0, 10, 10], // Terzo piano
                [-10, -10, -10, 0, 10], // Quarto piano
                [-10, -10, -10, -10, 0] // Quinto piano
            ];

            piani.forEach((p, i) => {
                p.style.transform = `translateX(${shifts[index][i]}px)`;
            });
        });

        piano.addEventListener("mouseleave", () => {
            piani.forEach((p) => (p.style.transform = ""));
        });
    });
});

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

/* HAMBURGER MENU */
document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
});
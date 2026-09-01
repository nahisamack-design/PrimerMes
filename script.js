
/* =========================================
   PARTÍCULAS ARTÍSTICAS
========================================= */

const particlesContainer =
    document.getElementById("particles");


function crearParticula() {

    const particle =
        document.createElement("div");


    particle.classList.add("particle");


    particle.style.left =
        Math.random() * 100 + "%";


    particle.style.top =
        Math.random() * 100 + "%";


    const size =
        Math.random() * 5 + 2;


    particle.style.width =
        size + "px";


    particle.style.height =
        size + "px";


    particlesContainer.appendChild(
        particle
    );


    const duracion =
        Math.random() * 5000 + 4000;


    particle.animate(

        [
            {
                transform: "translateY(0)",
                opacity: 0
            },

            {
                transform:
                    `translateY(-${Math.random() * 100 + 50}px)`,
                opacity: .4
            },

            {
                transform:
                    `translateY(-${Math.random() * 200 + 100}px)`,
                opacity: 0
            }
        ],

        {
            duration: duracion,

            easing: "ease-in-out"
        }

    );


    setTimeout(() => {

        particle.remove();

    }, duracion);

}


/* Crear partículas */

setInterval(

    crearParticula,

    500

);


/* =========================================
   ENTRADA DE LA PÁGINA
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

    }
);


/* =========================================
   VISOR DE FOTOS
========================================= */

function abrirFoto(imagen, titulo, descripcion) {

    const modal =
        document.getElementById("photoModal");

    const modalImage =
        document.getElementById("modalImage");

    const modalTitle =
        document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");


    modalImage.src = imagen;

    modalTitle.textContent = titulo;

    modalDescription.textContent =
        descripcion;


    modal.classList.add("show");
    setTimeout(() => {
    const paper = document.getElementById("letterPaper");

    if (!paper) return;

    const margen = 100;
    const espacioDisponible = window.innerHeight - margen;
    const alturaCarta = paper.scrollHeight;

    if (alturaCarta > espacioDisponible) {
        const escala = espacioDisponible / alturaCarta;
        paper.style.transform = `scale(${escala})`;
    } else {
        paper.style.transform = "scale(1)";
    }
}, 50);

    document.body.style.overflow = "auto";

}


/* =========================================
   CERRAR VISOR
========================================= */

function cerrarFoto() {

    const modal =
        document.getElementById("photoModal");


    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* =========================================
   CERRAR CON ESC
========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            cerrarFoto();

        }

    }
);


/* =========================================
   CERRAR AL TOCAR FUERA
========================================= */

const modal =
    document.getElementById("photoModal");


if (modal) {

    modal.addEventListener(
        "click",
        function(event) {

            if (event.target === modal) {

                cerrarFoto();

            }

        }
    );

}

/* =========================================
   CONFETI DE CELEBRACIÓN
========================================= */

const confettiContainer =
    document.getElementById("confetti");


if (confettiContainer) {


    function crearConfeti() {

        const confeti =
            document.createElement("div");


        confeti.classList.add(
            "confetti-piece"
        );


        confeti.style.left =
            Math.random() * 100 + "vw";


        confeti.style.width =
            (5 + Math.random() * 6) + "px";


        confeti.style.height =
            (8 + Math.random() * 12) + "px";


        confeti.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        const duracion =
            3500 + Math.random() * 4000;


        confetiContainer.appendChild(
            confeti
        );


        confeti.animate(

            [
                {
                    transform:
                        `translateY(0) rotate(0deg)`,
                    opacity: 0
                },

                {
                    opacity: .9
                },

                {
                    transform:
                        `translateY(110vh) rotate(720deg)`,
                    opacity: 0
                }

            ],

            {
                duration: duracion,

                easing: "cubic-bezier(.2,.8,.3,1)"
            }

        );


        setTimeout(() => {

            confeti.remove();

        }, duracion);

    }


    /* Primera lluvia */

    for (let i = 0; i < 45; i++) {

        setTimeout(

            crearConfeti,

            i * 80

        );

    }


    /* Confeti continuo */

    setInterval(

        crearConfeti,

        350

    );

}
javascript
/* =========================================
   CARTA INTERACTIVA
========================================= */

function abrirCarta() {

    const envelope =
        document.getElementById("envelope");

    const section =
        document.querySelector(".envelope-section");


    if (!envelope.classList.contains("open")) {

        envelope.classList.add("open");

        section.classList.add(
            "letter-open"
        );

    }

}


/* =========================================
   CERRAR CARTA
========================================= */

function cerrarCarta(event) {

    event.stopPropagation();


    const envelope =
        document.getElementById("envelope");

    const section =
        document.querySelector(".envelope-section");


    envelope.classList.remove("open");

    section.classList.remove(
        "letter-open"
    );

}

  function abrirCarta() {
    const envelope = document.getElementById("envelope");
    const closeButton = document.getElementById("closeLetter");

    envelope.classList.add("open");
    closeButton.classList.add("show");
}


function cerrarCarta(event) {
    event.stopPropagation();

    const envelope = document.getElementById("envelope");
    const closeButton = document.getElementById("closeLetter");

    envelope.classList.remove("open");
    closeButton.classList.remove("show");
}
function abrirFoto(imagen, titulo = "", descripcion = "") {
    const modal = document.getElementById("photoModal");
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    if (!modal) return;

    modalImage.src = imagen;
    modalTitle.textContent = titulo;
    modalDescription.textContent = descripcion;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}

function cerrarFoto() {
    const modal = document.getElementById("photoModal");

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";
}
function volverAlInicio() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.addEventListener("resize", () => {
    const paper = document.getElementById("letterPaper");

    if (!paper) return;

    const margen = 100;
    const espacioDisponible = window.innerHeight - margen;
    const alturaCarta = paper.scrollHeight;

    if (alturaCarta > espacioDisponible) {
        const escala = espacioDisponible / alturaCarta;
        paper.style.transform = `scale(${escala})`;
    } else {
        paper.style.transform = "scale(1)";
    }
});
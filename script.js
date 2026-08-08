// =========================================
// ELEMENTOS
// =========================================

const inicioJuego =
    document.getElementById("inicioJuego");

const invitacion =
    document.getElementById("invitacion");

const balonBoton =
    document.getElementById("balonBoton");

const golTexto =
    document.getElementById("golTexto");

const confirmar =
    document.getElementById("confirmar");

const mensajeConfirmacion =
    document.getElementById(
        "mensajeConfirmacion"
    );


// Bloquear scroll mientras está el juego

document.body.classList.add("bloqueado");



// =========================================
// METER GOL
// =========================================

let golRealizado = false;


balonBoton.addEventListener(
    "click",
    () => {

        if (golRealizado) {
            return;
        }

        golRealizado = true;


        // Quitar texto "toca el balón"

        const tocar =
            document.querySelector(".tocar");

        tocar.style.opacity = "0";


        // Disparar pelota

        balonBoton.classList.add(
            "disparo"
        );


        // Mostrar GOOOOOL

        setTimeout(
            () => {

                golTexto.classList.add(
                    "activo"
                );

                lanzarConfetti(90);

            },
            850
        );


        // Abrir invitación

        setTimeout(
            () => {

                inicioJuego.classList.add(
                    "ocultar"
                );

                invitacion.classList.add(
                    "visible"
                );

                document.body.classList.remove(
                    "bloqueado"
                );

                window.scrollTo(
                    0,
                    0
                );

            },
            2200
        );

    }
);



// =========================================
// ANIMACIONES AL HACER SCROLL
// =========================================

const elementos =
    document.querySelectorAll(
        ".reveal"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


elementos.forEach(
    elemento => {

        observer.observe(
            elemento
        );

    }
);



// =========================================
// CONFIRMAR ASISTENCIA
// =========================================

confirmar.addEventListener(
    "click",
    () => {

        mensajeConfirmacion
            .classList
            .add(
                "activo"
            );

        confirmar.innerHTML =
            "✅ ASISTENCIA CONFIRMADA";

        confirmar.disabled = true;

        lanzarConfetti(100);

    }
);



// =========================================
// CONFETI
// =========================================

function lanzarConfetti(
    cantidad = 70
) {

    const colores = [

        "#ffe600",
        "#39ff88",
        "#ffffff",
        "#18bd59"

    ];


    for (
        let i = 0;
        i < cantidad;
        i++
    ) {

        const confetti =
            document.createElement(
                "div"
            );

        confetti.classList.add(
            "confetti-piece"
        );


        confetti.style.left =
            Math.random() *
            100 +
            "vw";


        confetti.style.backgroundColor =
            colores[
                Math.floor(
                    Math.random() *
                    colores.length
                )
            ];


        confetti.style.animationDuration =
            (
                2 +
                Math.random() *
                2
            ) +
            "s";


        confetti.style.animationDelay =
            Math.random() *
            0.4 +
            "s";


        document.body.appendChild(
            confetti
        );


        setTimeout(
            () => {

                confetti.remove();

            },
            4500
        );

    }

}
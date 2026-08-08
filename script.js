<<<<<<< HEAD
const opening = document.getElementById("opening");
const ball = document.getElementById("ball");
const openingCopy = document.getElementById("openingCopy");
const touchNote = document.getElementById("touchNote");
const goalText = document.getElementById("goalText");
const invitation = document.getElementById("invitation");
const confetti = document.getElementById("confetti");
const confirmButton = document.getElementById("confirmButton");
const modal = document.getElementById("modal");
const guestName = document.getElementById("guestName");
const whatsappButton = document.getElementById("whatsappButton");
const closeButtons = document.querySelectorAll("[data-close]");

let goalScored = false;

/* Reemplaza por el número real con código de país, sin +, espacios ni guiones. */
const whatsappNumber = "59171744427";

ball.addEventListener("click", () => {
  if (goalScored) return;
  goalScored = true;

  ball.classList.add("kicked");
  openingCopy.classList.add("kicked");
  touchNote.classList.add("hidden");

  setTimeout(() => goalText.classList.add("show"), 850);
  setTimeout(openInvitation, 1800);
});

function openInvitation() {
  invitation.classList.add("visible");
  invitation.setAttribute("aria-hidden", "false");
  opening.classList.add("hidden");
  document.body.style.overflowY = "auto";
  makeConfetti(90);
  setTimeout(() => opening.style.display = "none", 800);
}

function makeConfetti(amount) {
  const colors = ["#ffc928", "#00a8ff", "#15d665", "#ffffff", "#ff7a00"];
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "piece";
    const duration = 2.8 + Math.random() * 3.2;
    const delay = Math.random() * 1.2;
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${duration}s`;
    piece.style.animationDelay = `${delay}s`;
    piece.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
    confetti.appendChild(piece);
    setTimeout(() => piece.remove(), (duration + delay) * 1000 + 300);
  }
}

confirmButton.addEventListener("click", () => {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  setTimeout(() => guestName.focus(), 150);
});

closeButtons.forEach(button => button.addEventListener("click", closeModal));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

whatsappButton.addEventListener("click", () => {
  const name = guestName.value.trim();
  if (!name) {
    guestName.focus();
    return;
  }

  if (whatsappNumber.includes("X")) {
    alert("Abre script.js y reemplaza 591XXXXXXXX por el número real de WhatsApp.");
    return;
  }

  const message = `Hola, soy ${name}. Confirmo mi asistencia al cumpleaños de Leo el sábado 22 de agosto a las 15:00.`;
  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
=======
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
>>>>>>> efd7f3a (Invitacion cumpleaños Leo)

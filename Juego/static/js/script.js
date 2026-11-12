const canvas = document.getElementById("juego");
const ctx = canvas.getContext("2d");

const textoPuntos = document.getElementById("puntos");
const textoVidas = document.getElementById("vidas");
const pantallaFinal = document.getElementById("pantalla-final");
const textoPuntajeFinal = document.getElementById("puntaje-final");
const btnReiniciar = document.getElementById("btn-reiniciar");

let puntos = 0;
let vidas = 3;
let juegoActivo = true;

// Datos del jugador (la barra)
let jugador = {
    x: 160,
    y: 460,
    ancho: 80,
    alto: 15,
    velocidad: 7
};

// Lista de objetos que caen
let objetos = [];

// Control de teclas
let teclas = { derecha: false, izquierda: false };

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight" || e.key === "d") teclas.derecha = true;
    if (e.key === "ArrowLeft" || e.key === "a") teclas.izquierda = true;
});

document.addEventListener("keyup", (e) => {
    if (e.key === "ArrowRight" || e.key === "d") teclas.derecha = false;
    if (e.key === "ArrowLeft" || e.key === "a") teclas.izquierda = false;
});

// Crear una estrella o una bomba cada cierto tiempo
setInterval(() => {
    if (!juegoActivo) return;
    let esBomba = Math.random() < 0.3; // 30% de probabilidad de que sea bomba
    objetos.push({
        x: Math.random() * (canvas.width - 20),
        y: 0,
        radio: 10,
        velocidad: 3,
        tipo: esBomba ? "bomba" : "estrella"
    });
}, 1000);

// Función principal del juego
function actualizar() {
    if (!juegoActivo) return;

    // Limpiar pantalla
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Mover jugador
    if (teclas.derecha && jugador.x + jugador.ancho < canvas.width) {
        jugador.x += jugador.velocidad;
    }
    if (teclas.izquierda && jugador.x > 0) {
        jugador.x -= jugador.velocidad;
    }

    // Dibujar jugador
    ctx.fillStyle = "#00ffcc";
    ctx.fillRect(jugador.x, jugador.y, jugador.ancho, jugador.alto);

    // Mover y dibujar objetos
    for (let i = 0; i < objetos.length; i++) {
        let obj = objetos[i];
        obj.y += obj.velocidad;

        ctx.beginPath();
        ctx.arc(obj.x, obj.y, obj.radio, 0, Math.PI * 2);
        ctx.fillStyle = obj.tipo === "estrella" ? "#ffcc00" : "#ff4444";
        ctx.fill();

        // Revisar si choca con el jugador
        if (
            obj.y + obj.radio >= jugador.y &&
            obj.x >= jugador.x &&
            obj.x <= jugador.x + jugador.ancho
        ) {
            if (obj.tipo === "estrella") {
                puntos += 10;
                textoPuntos.textContent = puntos;
            } else {
                vidas -= 1;
                textoVidas.textContent = vidas;
            }
            objetos.splice(i, 1);
            i--;
            revisarFin();
        } else if (obj.y > canvas.height) {
            // Eliminar si sale de la pantalla
            objetos.splice(i, 1);
            i--;
        }
    }

    requestAnimationFrame(actualizar);
}

// Revisar si perdió todas las vidas
function revisarFin() {
    if (vidas <= 0) {
        juegoActivo = false;
        textoPuntajeFinal.textContent = puntos;
        pantallaFinal.classList.remove("oculto");
    }
}

// Reiniciar el juego
btnReiniciar.addEventListener("click", () => {
    puntos = 0;
    vidas = 3;
    objetos = [];
    jugador.x = 160;
    juegoActivo = true;
    textoPuntos.textContent = puntos;
    textoVidas.textContent = vidas;
    pantallaFinal.classList.add("oculto");
    actualizar();
});

// Iniciar juego
actualizar();

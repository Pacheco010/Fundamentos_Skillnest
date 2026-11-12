// 1. Función para incrementar la cantidad de abrazos de cada persona
function enviarAbrazo(idContador) {
    const elementoContador = document.getElementById(idContador);
    let abrazosActuales = parseInt(elementoContador.innerText);
    abrazosActuales++;
    elementoContador.innerText = abrazosActuales;
}

// 2. Evento para eliminar la sección de cookies al hacer clic en "Aceptar"
const btnAceptarCookies = document.getElementById("accept-cookies");
const seccionCookies = document.getElementById("cookie-section");

btnAceptarCookies.addEventListener("click", function () {
    seccionCookies.remove();
});

// 3. Evento para mostrar la alerta al hacer clic en "¿Cómo funciona?"
const enlaceComoFunciona = document.getElementById("how-it-works");

enlaceComoFunciona.addEventListener("click", function (evento) {
    evento.preventDefault(); // Evita que la página salte hacia arriba
    alert("Busca a tus Amigos y reparte a través de nuestra página abrazos a todos.");
});

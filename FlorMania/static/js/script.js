// 1. Al pasar el cursor sobre "Envía Flores", el texto cambia a "Envía Bouquets"
const enlaceEnvia = document.getElementById("link-envia");

enlaceEnvia.addEventListener("mouseover", function () {
    enlaceEnvia.innerText = "Envía Bouquets";
});

enlaceEnvia.addEventListener("mouseout", function () {
    enlaceEnvia.innerText = "Envía Flores";
});

// 2. Al hacer clic en los botones "Comprar", desaparece ese botón
function comprarProducto(boton) {
    boton.remove();
}

// 3. Al hacer clic en el botón "Iniciar Sesión", muestra alerta con bienvenida
const botonLogin = document.getElementById("btn-login");

botonLogin.addEventListener("click", function () {
    alert("Bienvenido a la tienda de flores");
});

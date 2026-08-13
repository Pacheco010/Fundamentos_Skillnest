console.log("Prueba de conexión js...");

/* Ejemplo Bucle for */
function contarHasta5() {
    for (let i = 1; i <= 5; i++) {
        alert(i);
    }
}

function cuentaRegresiva() {
    for (let i = 10; i > 0; i--) {
        alert(i);
    }
}

function recorrerLista() {
    // Lista es un tipo de dato (array/lista/arreglos)
    // [] = ["nombre", 4, True, [2,4]]
    /* 
    let nombre = "Carlos";
    alert(nombre); 
                        0           1
    let nombres = ["Carlos", "Maria"]
    alert(nombres[0]) --> Imprime Carlos
    alert(nombres[1]) --> Imprime Maria
    alert(nombres[0].length); --> 6 (largo [0])
    alert(nombres.length); --> 2 (largo nombres)
    */
    let usuarios = ["Ana", "Luis", "Maria", "Cesar"];
    for (let i = 0; i < usuarios.length; i++) {
        alert("Bienvenido, " + usuarios[i]);
    }
}

/* Ejemplo Bucle while */
function reproducirCancion() {
    let reproduciendo = true;

    while (reproduciendo) {
        alert("La canción sigue sonando...");
        reproduciendo = false;
    }
}
function cargarDatos() {
    let datosPendientes = 5;

    while (datosPendientes > 0) {
        alert(`Cargando datos... ${datosPendientes} de 5`);
        datosPendientes--;
    }
}

function validarContrasena() {
    let contrasenaCorrecta = false;
    while (!contrasenaCorrecta) {
        let intento = prompt("Ingresa tu contraseña:");
        if (intento === "1234") {
            contrasenaCorrecta = true;
            alert("Acceso concedido.");
            break;  //rompe el bucle.
            alert("No se ejecuta"); 
        } else {
            alert("Contraseña incorrecta, intenta de nuevo.");
        }
    }
}

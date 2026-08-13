console.log("conexion correcta...");

// Ejercicio 1: Calculadora de Envío
// Enunciado
// Una empresa de despacho cobra el envío dependiendo del 
// peso del paquete.

// Solicitar:

// Nombre del cliente
// Peso del paquete (kg)

// Condiciones:
// Hasta 2 kg
// Más de 2 kg y hasta 5 kg
// Más de 5 kg y hasta 10 kg
// Más de 10 kg

// El programa debe indicar:
// Nombre del cliente
// Valor correspondiente al despacho

function ejercicio1() {
    let nombreCliente = prompt("Ingresar nombre de cliente: ");
    let peso = parseInt(prompt("Ingresar peso de paquete: "));
    let valorDespacho = 2000;
    let totalDespacho = 0;
    let mensaje = "";
    if (peso > 0 && peso <= 2) {
        totalDespacho = peso * valorDespacho;
    } else if (peso > 2 && peso <= 5) {
        totalDespacho = peso * valorDespacho;
    } else if (peso > 5 && peso <= 10) {
        totalDespacho = peso * valorDespacho;
    } else if (peso > 10 && peso < 50) {
        totalDespacho = peso * valorDespacho;
    } else {
        mensaje = "Ingrese valores validos!";
    }
    mensaje = `Nombre Cliente: ${nombreCliente} \nPaquete pesa: ${peso}kg 
        \nValor despacho: $${valorDespacho * peso}`;
    alert(mensaje);
}

// Ejercicio 2: Acceso a Biblioteca
// Enunciado
// Una biblioteca posee dos tipos de usuarios:

// Estudiante
// Profesor
// Solicitar:

// Tipo de usuario
// Cantidad de libros solicitados
// Condiciones:

// Cada tipo de usuario posee un límite distinto de préstamos.

// El programa debe indicar:

// Si el préstamo está permitido.
// Si supera el límite permitido.
// Mostrar un mensaje diferente según el tipo de usuario.
// Utilizar operadores lógicos para realizar las validaciones.

function ejercicio2() {
    let usuario = prompt("Ingrese su tipo de usuario: ");
    let prestamoEstudiante = 10;
    let prestamoProfesor = 20;
    let libros = parseInt(prompt("Ingrese la cantidad de libros solicitados: "))
    let mensaje = "";
    if (usuario === "Estudiante" && libros <= prestamoEstudiante) {
        mensaje = `Bienvenido Estudiante\nPrestamo de libros concedido`;
    } else if (libros > prestamoEstudiante) {
        mensaje = `La cantidad de libros supera el prestamo designado\nPrestamo denegado`
    } else if (usuario == "Profesor" && libros <= prestamoProfesor) {
        mensaje = `Bienvenido Profesor\nPrestamo de libros concedido`;
    } else if (libros > prestamoProfesor) {
        mensaje = `La cantidad de libros supera el prestamo designado\nPrestamo denegado`
    } else {
        mensaje = "Ingrese un usuario válido"
    }
    alert(mensaje);
}

// Ejercicio 3: Clasificación Deportiva
// Enunciado
// Solicitar:

// Nombre del participante
// Edad
// Clasificar al participante según su edad.

// Debe existir al menos cuatro categorías distintas.

// Finalmente mostrar:

// Nombre
// Edad
// Categoría asignada

function ejercicio3() {
    let nombre = prompt("Ingresa tu nombre")
    let edad = parseInt(prompt("ingresa tu edad"))
    if (edad <= 10 && edad > 0) {
        alert(`Nombre: ${nombre}\nEdad: ${edad}\nCategoria: niño`)
    } else if (edad >= 11 && edad <= 17) {
        alert(`Nombre: ${nombre}\nEdad: ${edad}\nCategoria: Adolecencte`)
    } else if (edad >= 18 && edad <= 60) {
        alert(`Nombre: ${nombre}\nEdad: ${edad}\nCategoria: Adulto`)
    }else if (edad > 60 && edad < 100) {
        alert(`Nombre: ${nombre}\nEdad: ${edad}\nCategoria: Adulto mayor`)
    } else{
        alert("Ingrese una edad valida")
    }
}

// Ejercicio 4: Sistema de Bonificación
// Enunciado
// Una empresa entrega bonos según los años trabajados.

// Solicitar:

// Nombre del trabajador
// Años de servicio
// Clasificar según distintos rangos de antigüedad.

// Mostrar:

// Nombre
// Nivel de antigüedad
// Mensaje indicando si recibe o no bonificación.

function ejercicio4() {
    let nombreTrabajador = prompt(`Ingrese su nombre`);
    let años = parseInt(prompt(`Ingrese años de servicio`));
    let mensaje = "";
    if (años == 0) {
        mensaje = `Nombre: ${nombreTrabajador}\nLo sentimos, no recibira bonificacion,
        \nya que no lleva suficiente tiempo en la empresa`;
    } else if (años > 0 && años <= 2) {
        mensaje = `Nombre: ${nombreTrabajador}
        \nNivel de antiguedad: Nivel ${años}\nSe le dara una bonificación desde 5% a 7%`;
    } else if (años > 2 && años <= 5) {
        mensaje = `Nombre: ${nombreTrabajador}
        \nNivel de antiguedad: Nivel ${años}\nSe le dara una bonificación desde 8% a 10%`;
    } else if (años > 5 && años <= 9) {
        mensaje = `Nombre: ${nombreTrabajador}
        \nNivel de antiguedad: Nivel ${años}\nSe le dara una bonificación desde 10% a 12%`;
    } else if (años > 9 && años <= 99) {
        mensaje = `Nombre: ${nombreTrabajador}
        \nNivel de antiguedad: Nivel ${años} \nSe le dara una bonificacion del 15%`;
    } else {
        mensaje = `Ingrese valores validos`;
    }
    alert(mensaje);
}

// Ejercicio 5: Evaluación de Velocidad
// Enunciado
// Solicitar:

// Nombre del conductor
// Velocidad registrada
// Condiciones:

// Clasificar la velocidad en distintos rangos.

// Ademas:

// Si supera un determinado limite, mostrar un mensaje indicando que ha excedido la velocidad permitida.

// Mostrar:

function ejercicio5(){   
let nombreConductor = prompt("Ingrese nombre del conductor");
let velocidad = parseInt(prompt("Ingrese velocidad"));
let limiteVelocidad = 90;
let mensaje = "";
    if(limiteVelocidad <= velocidad && velocidad >= 85){
        mensaje = "Velocidad limite"
    } else if(limiteVelocidad > velocidad && velocidad >= 65){
        mensaje = "Velocidad alta, baje un poco la velocidad"
    } else if(velocidad <= 60 && velocidad > 30){
        mensaje = "Velocidad adecuada"
    } else{
        mensaje = "Velocidad lenta"
    }
    alert(mensaje)
}
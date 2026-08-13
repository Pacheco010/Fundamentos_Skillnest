// // console.log("Conexión exitosa...");

// // // Variables a lista

// // let nombre1 = "Ana";
// // let nombre2 = "Pedro";
// // let nombre3 = "Maria";
// // let nombre4 = "Carlos";

// // // Transformar en array y mostrar

// // let nombres = ["Ana", "Pedro", "Maria", "Carlos"];

// // //Mostrar a Maria en una alerta
// // console.log(nombres[2]); //Muestra Maria
// // let compras = [5000, 2300, 12000, 4500, 3000];
// // let alumnos = ["Ana", "Pedro", "Maria", "Jose"];
// // let datos = ["Carlos", 18, true];
// // let frutas = ["Manzana", "Pera", "Kiwi", "Sandia"];

// // // Desafío formar una oracion con elementos
// // // de las distintas variables
// // // Pedro tiene 18 años, y compro una sandía a $2300
// // let mensaje = `${alumnos[1]} tiene ${datos[1]} años, 
// // y compro una ${frutas[3]} a $${compras[1]}.`;
// // console.log(mensaje);


// // // La propiedad .length devuelve la cantidad de elementos.

// // let frutas2 = ["Manzana", "Pera", "Kiwi", "Sandia"];
// // console.log(frutas2.length); // 4 --> Conteo de elementos

// // //Obtener el último elemento
// // let frutas3 = ["Manzana", "Pera", "Kiwi", "Sandia"];
// // let ultima = frutas3[frutas3.length - 1];
// // // variable.length -1 siempre trae el ultimo elemento

// // console.log(ultima);

// // // Desafio
// // //Del arreglo ["Hola", "a", "todos", "los", "programadores!"].
// // // Mostrar el penultimo elemento y el último concatenado.

// // let algo = ["Hola", "a", "todos", "los", "programadores!"]
// // console.log(algo[algo.length - 2] + " " + algo[algo.length - 1])


let listaTareas = ["Barrer", "Cocinar", "Realizar compras"];

function manipularArreglo() {
  //Modificar un elemento del arreglo
  listaTareas[1] = "Construir";
  //Añadir un elemento al final de la lista
  listaTareas.push("Cocinar"); //Agrega un elemento al final .push()
  //Eliminar el último elemento y mostrarlo
  let eliminado = listaTareas.pop(); // Elimina último .pop()
  //Añadir un elemento al inicio de la lista
  listaTareas.unshift("Boxear"); //Agrega al principio unshift()
  //Eliminar el primer elemento de la lista
  eliminado += " - " + listaTareas.shift(); //.shift elimina el primero
  //Mostrar resultado
  alert(listaTareas.join(" - "));
  alert("Elementos eliminados: " + eliminado);
}

//Recorrer un arreglo
function recorrerArreglo() {
  let notas = [6.2, 5.8, 4.1, 7.0, 3.0, 6.9];

  for (let i = 0; i < notas.length; i++) {
    alert(`Mostrando Nota ${i + 1} de ${notas.length}: ${notas[i]}`);
  }

}

//Sumar elementos dentro de un bucle
function sumarElementos() {
  let ventas = [10000, 5000, 12000, 8000];
  let total = 0;

  for (let i = 0; i < ventas.length; i++) {
    total += ventas[i];
  }
  alert(`El resultado final es: ${total}`);
}

//Calcular un promedio
function calcularPromedio() {
  let notas = [5.8, 6.2, 4.9, 6.5];
  let suma = 0;

  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  alert(`La suma acumulada es: ${suma}`)
  let promedio = suma / notas.length;
  alert(`El promedio de las notas: ${notas.join(' / ')}\nPromedio: ${promedio}`);
}

//Condiciones dentro de bucle
function buscarMayoresEdad() {
  let edades = [12, 15, 18, 20, 25, 35, 50, 5];
  let mayores = [];
  for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
      mayores.push(edades[i]);
    }
  }
  alert(`De la lista de edades: ${edades.join(' / ')}.
  \nLos mayores son: ${mayores.join(' / ')}`)
}

// Encontrar el menor y el mayor
function buscarMayorMenor() {
  let numeros = [10, 35, 7, 90, 22, 90, 2];
  let menor = numeros[0];
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    } else if (numeros[i] > mayor) {
      mayor = numeros[i];
    } else {
      console.log(`Valor que no afecta: ${numeros[i]} `)
    }
  }
  alert(`De los numeros ${numeros.join(' / ')}
El menor es: ${menor}
El mayor es: ${mayor}`);
}
//Ejemplo completo
//Tarea: Unir los console.log en una alerta
//Eliminar el ultimo valor y mostrarlo. ok
//Añadir dos valores nuevos con .push (prompt) ok
//Contar cantidad de ventas mayores que $10.000
function calcularVentas() {
  let ventas = [5000, 8000, 12000, 3000, 10000, 9000, 4000];
  let total = 0;
  let mayores = [];
  let contadorVentas = 0;
  let mayor = ventas[0];
  let valorEliminado = ventas.pop();
  let valor1 = parseInt(prompt("Ingrese primer valor: "));
  let valor2 = parseInt(prompt("Ingrese segundo valor: "));
  ventas.push(valor1, valor2);
  for (let i = 0; i < ventas.length; i++) {
    total += ventas[i];
    if (ventas[i] > mayor) {
      mayor = ventas[i];
      if(ventas[i] >= 10000){
        mayores.push(ventas[i])
        contadorVentas++;
      }
    }
  }
  alert(`Total ventas: ${total}\nMayor: ${mayor}
Promedio:${total / ventas.length}
Valores sobres $10.000: ${mayores.join(' / ')}
Conteo de mayores: ${contadorVentas} ventas
Valor Eliminado: ${valorEliminado}`);
}

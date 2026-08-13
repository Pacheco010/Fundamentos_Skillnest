# 📚 Lección: Operaciones con Arreglos en JavaScript

## 🎯 Objetivos de Aprendizaje

Al finalizar esta lección serás capaz de:

- Manipular arreglos utilizando los métodos más comunes de JavaScript.
- Agregar, eliminar y modificar elementos dentro de un arreglo.
- Conocer la cantidad de elementos almacenados.
- Recorrer un arreglo utilizando `for` y `forEach()`.
- Combinar arreglos mediante el método `concat()`.
- Utilizar arreglos para representar información del mundo real.
- Resolver problemas utilizando arreglos y sus principales operaciones.

---

# 🤔 ¿Por qué necesitamos manipular arreglos?

En una aplicación real los datos cambian constantemente.

Por ejemplo:

- Un cliente agrega productos a un carrito de compras.
- Un estudiante se matricula en un curso.
- Un empleado cambia de cargo.
- Se elimina un usuario del sistema.
- Se agregan nuevas ventas al finalizar el día.

Todas estas acciones requieren **modificar un arreglo**.

Por esta razón JavaScript incorpora diversos métodos que facilitan trabajar con ellos.

---

# 🗂️ Ejemplo del mundo real

Imaginemos que almacenamos la información básica de un empleado.

```javascript
let userData = [
    "Guido",
    "van Rossum",
    "guido@python.org"
];
```

Cada posición representa un dato diferente.

| Índice | Información |
|---------|-------------|
| 0 | Nombre |
| 1 | Apellido |
| 2 | Correo electrónico |

Podemos acceder a cualquier dato mediante su índice.

```javascript
console.log(userData[0]);
```

Resultado

```text
Guido
```

---

# ➕ Agregar elementos con `push()`

El método **push()** agrega uno o más elementos al **final del arreglo**.

## Sintaxis

```javascript
arreglo.push(elemento);
```

Ejemplo.

```javascript
let userData = [
    "Guido",
    "van Rossum",
    "guido@python.org"
];

userData.push("Programador");

console.log(userData);
```

Resultado

```text
[
 "Guido",
 "van Rossum",
 "guido@python.org",
 "Programador"
]
```

También podemos agregar varios elementos al mismo tiempo.

```javascript
userData.push("Chile", 35);

console.log(userData);
```

Resultado

```text
[
 "Guido",
 "van Rossum",
 "guido@python.org",
 "Programador",
 "Chile",
 35
]
```

---

# ➖ Eliminar el último elemento con `pop()`

El método **pop()** elimina el último elemento del arreglo.

```javascript
let frutas = ["Manzana","Pera","Kiwi"];

frutas.pop();

console.log(frutas);
```

Resultado

```text
["Manzana","Pera"]
```

> **Importante:** `pop()` modifica directamente el arreglo original.

---

# 🗑️ Eliminar un elemento específico con `splice()`

Muchas veces necesitamos eliminar un elemento que está en una posición determinada.

Para eso utilizamos `splice()`.

## Sintaxis

```javascript
arreglo.splice(inicio, cantidad);
```

Donde:

- **inicio** → índice donde comienza la eliminación.
- **cantidad** → número de elementos que serán eliminados.

Ejemplo.

```javascript
let alumnos = [
    "Ana",
    "Pedro",
    "María",
    "Carlos"
];

alumnos.splice(1,1);

console.log(alumnos);
```

Resultado

```text
[
 "Ana",
 "María",
 "Carlos"
]
```

Se eliminó **Pedro**.

---

## Eliminar varios elementos

```javascript
let numeros = [10,20,30,40,50,60];

numeros.splice(2,3);

console.log(numeros);
```

Resultado

```text
[10,20,60]
```

Se eliminaron:

- 30
- 40
- 50

---

# ✏️ Reemplazar elementos utilizando `splice()`

`splice()` también puede reemplazar elementos.

```javascript
let frutas = [
    "Manzana",
    "Pera",
    "Kiwi"
];

frutas.splice(1,1,"Sandía");

console.log(frutas);
```

Resultado

```text
[
 "Manzana",
 "Sandía",
 "Kiwi"
]
```

---

# 🔄 Actualizar un elemento mediante su índice

Otra forma muy sencilla consiste en acceder directamente al índice.

```javascript
let userData = [
    "Guido",
    "van Rossum",
    "guido@python.org",
    "Programador"
];

userData[3] = "Matemático";

console.log(userData);
```

Resultado

```text
[
 "Guido",
 "van Rossum",
 "guido@python.org",
 "Matemático"
]
```

---

# 📏 Contar elementos con `length`

La propiedad `length` indica cuántos elementos existen.

```javascript
let productos = [
    "Notebook",
    "Mouse",
    "Monitor",
    "Teclado"
];

console.log(productos.length);
```

Resultado

```text
4
```

Después de eliminar un elemento.

```javascript
productos.pop();

console.log(productos.length);
```

Resultado

```text
3
```

---

# 🔁 Recorrer un arreglo utilizando `for`

```javascript
let colores = [
    "Rojo",
    "Azul",
    "Verde"
];

for(let i=0;i<colores.length;i++){

    console.log(colores[i]);

}
```

Resultado

```text
Rojo

Azul

Verde
```

---

# 🔁 Recorrer un arreglo utilizando `forEach()`

JavaScript incorpora un método moderno para recorrer arreglos.

```javascript
let colores = [
    "Rojo",
    "Azul",
    "Verde"
];

colores.forEach((color)=>{

    console.log(color);

});
```

Resultado

```text
Rojo

Azul

Verde
```

---

## ¿Qué significa cada parámetro?

```javascript
colores.forEach((elemento, indice)=>{

    console.log(indice + " -> " + elemento);

});
```

Resultado

```text
0 -> Rojo

1 -> Azul

2 -> Verde
```

Donde:

- **elemento** → valor almacenado.
- **indice** → posición del elemento.

---

# 🔄 Diferencias entre `for` y `forEach()`

| for | forEach() |
|------|-----------|
| Más flexible | Más simple de leer |
| Permite usar break y continue | No permite break |
| Muy utilizado en algoritmos | Muy utilizado para recorrer datos |
| Debes controlar el índice | JavaScript controla el recorrido |

---

# 🔗 Unir arreglos con `concat()`

Si tenemos dos arreglos independientes podemos unirlos.

```javascript
let hobbies = [
    "Fotografía",
    "Ciclismo"
];

let deportes = [
    "Fútbol",
    "Tenis"
];

let actividades = hobbies.concat(deportes);

console.log(actividades);
```

Resultado

```text
[
 "Fotografía",
 "Ciclismo",
 "Fútbol",
 "Tenis"
]
```

Los arreglos originales permanecen iguales.

```javascript
console.log(hobbies);
console.log(deportes);
```

Resultado

```text
["Fotografía","Ciclismo"]

["Fútbol","Tenis"]
```

---

# 📌 Ejemplo Integrador

Una tienda almacena sus productos.

```javascript
let productos = [
    "Notebook",
    "Mouse",
    "Monitor"
];

productos.push("Teclado");

productos.push("Parlantes");

productos.splice(1,1);

productos[0]="Notebook Gamer";

productos.forEach((producto,indice)=>{

    console.log(indice + ": " + producto);

});

console.log("Cantidad:", productos.length);
```

Resultado

```text
0: Notebook Gamer

1: Monitor

2: Teclado

3: Parlantes

Cantidad: 4
```

---

# 💡 Buenas prácticas

✔ Utiliza nombres descriptivos.

```javascript
let estudiantes = [];

let productos = [];

let ventas = [];
```

✔ Evita mezclar tipos de datos sin necesidad.

```javascript
let notas = [5.5,6.2,4.8];
```

En lugar de

```javascript
let datos = [5.5,"Pedro",true,2500];
```

---

# 📚 Resumen

Durante esta lección aprendiste a utilizar:

| Método | Función |
|---------|----------|
| `push()` | Agrega al final |
| `pop()` | Elimina el último |
| `splice()` | Elimina o reemplaza elementos |
| `length` | Cuenta elementos |
| `forEach()` | Recorre el arreglo |
| `concat()` | Une arreglos |

Estas operaciones forman parte del trabajo diario de cualquier desarrollador.

---

# 💻 Ejercicios

## Ejercicio 1

Crear el siguiente arreglo.

```javascript
let alumnos = [
    "Ana",
    "Pedro",
    "María"
];
```

Agregar un nuevo alumno utilizando `push()`.

Mostrar el arreglo completo.

---

## Ejercicio 2

Crear el siguiente arreglo.

```javascript
let productos = [
    "Notebook",
    "Mouse",
    "Monitor",
    "Teclado"
];
```

Eliminar el último producto utilizando `pop()`.

Mostrar el resultado.

---

## Ejercicio 3

Crear el siguiente arreglo.

```javascript
let ciudades = [
    "Santiago",
    "Valparaíso",
    "Concepción",
    "La Serena"
];
```

Eliminar **Valparaíso** utilizando `splice()`.

---

## Ejercicio 4

Crear el siguiente arreglo.

```javascript
let notas = [
    5.5,
    6.2,
    4.1,
    5.8
];
```

Modificar la nota **4.1** por **6.0**.

Mostrar el arreglo actualizado.

---

## Ejercicio 5

Crear un arreglo con cinco frutas.

Mostrar la cantidad de frutas utilizando `length`.

---

## Ejercicio 6

Crear el siguiente arreglo.

```javascript
let animales = [
    "Perro",
    "Gato",
    "Conejo",
    "Caballo"
];
```

Recorrer el arreglo utilizando un `for`.

---

## Ejercicio 7

Realizar el ejercicio anterior utilizando `forEach()`.

---

## Ejercicio 8

Crear dos arreglos.

```javascript
let frontend = [
    "HTML",
    "CSS",
    "JavaScript"
];

let backend = [
    "Python",
    "Flask",
    "MySQL"
];
```

Unir ambos utilizando `concat()`.

---

## Ejercicio 9

Crear el siguiente arreglo.

```javascript
let numeros = [
    10,
    20,
    30,
    40,
    50
];
```

Eliminar los números **20** y **30** utilizando `splice()`.

---

## Ejercicio 10 (Desafío)

Una tienda almacena sus productos.

```javascript
let productos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Notebook"
];
```

Realiza las siguientes operaciones:

1. Agregar "Audífonos".
2. Agregar "Webcam".
3. Eliminar "Teclado".
4. Cambiar "Notebook" por "Notebook Gamer".
5. Mostrar todos los productos utilizando `forEach()`.
6. Mostrar la cantidad final de productos.

---

# 🚀 Desafío Final

Una biblioteca registra sus libros.

```javascript
let libros = [
    "Clean Code",
    "JavaScript",
    "Python",
    "HTML"
];
```

Desarrolla un programa que permita:

1. Agregar dos libros nuevos.
2. Eliminar el último libro.
3. Reemplazar "HTML" por "CSS".
4. Recorrer todos los libros utilizando `forEach()`.
5. Mostrar la cantidad de libros.
6. Crear un segundo arreglo llamado `librosNuevos`.
7. Unir ambos arreglos utilizando `concat()`.
8. Mostrar el catálogo completo.

### ⭐ Desafío Extra

Investiga e implementa los siguientes métodos de arreglos:

- `includes()`
- `indexOf()`
- `reverse()`
- `sort()`

Realiza un programa donde utilices los cuatro métodos y explica qué hace cada uno mediante comentarios en tu código.
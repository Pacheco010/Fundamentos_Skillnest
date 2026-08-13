// 📋 Instrucciones 
// 👨‍🍳 Crea una función llamada pizzaOven que devuelva un objeto con las propiedades:

// corteza: tipo de corteza de la pizza.
// salsa: tipo de salsa utilizada.
// quesos: un arreglo con los tipos de queso que tiene la pizza.
// ingredientes: un arreglo con los ingredientes adicionales.
// 🍕 Usa la función para crear las siguientes pizzas:

// Una pizza “estilo Chicago” con corteza tradicional, salsa tradicional, mozzarella y los ingredientes pepperoni y salchicha.
// Una pizza “lanzada a mano” con salsa marinara, mozzarella y feta, y los ingredientes champiñones, aceitunas y cebollas.
// Crea dos pizzas más con tus ingredientes favoritos.
// 💻 Muestra en "html con alert" los objetos de cada pizza creada.
function mostrarSandwitch(){
  
function sandwichFactory(pan, proteina, queso, salsas) {
  let sandwich = {};
  sandwich.pan = pan;
  sandwich.proteina = proteina;
  sandwich.queso = queso;
  sandwich.salsas = salsas;
  /*
  s1 = {
  pan: "trigo",
  proteina: "pavo",
  queso: "provolone",
  salsas: ["mostaza", "cebolla frita", "rucula"]
  }
  
  */
  return sandwich;
}
//Instancia de objeto
let s1 = sandwichFactory(
  "trigo",
  "pavo",
  "provolone",
  ["mostaza", "cebolla frita", "rúcula"],
);
let s2 = sandwichFactory(
  "masa madre","pollo","chedar",["ketchup","mayonese"]
);
console.log(s1);
alert(`Ingredientes del segundo sandwitch:
  Pan: ${s2.pan}
  Proteína: ${s2.proteina}
  Queso: ${s2.queso}
  Salsas: ${s2.salsas.join(" - ")}`
);

}  

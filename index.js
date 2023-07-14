const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



// ejercico 1

const impares = pizzas.filter((pizza) =>
pizza.id %2!== 0); 
console.log("estos son los id impares: ", impares)



//ejercicio 2

const menosDe600 = pizzas.filter((pizza) =>
  pizza.precio < 600);

console.log(`estas son las pizzas que cuestan menos de 600: `, menosDe600);

 

//ejercicio 3

const nombresYprecios = pizzas.forEach(pizza =>
  console.log(pizza.nombre, "precio $", pizza.precio));


 

//ejercicio 4

 const ingredientes = pizzas.forEach((pizza) =>{
  console.log('la ' + pizza.nombre + " tiene: ")
  pizza.ingredientes.forEach((ingredientes) => {
    console.log(ingredientes);
  })
})
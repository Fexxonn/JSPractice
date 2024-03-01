//Array
//Los arrays comiensan desde el 0 hasta el infinito.
//Puede tener en un mismo array strings, numeros y booleanos
//Realizar esta practica no es recomendable pero es posible
//Solo usar strings o numeros o booleanos
const miArray = ["David", "Juan", "Kevin"];
//                 0        1       2
console.log(miArray); //Imprime los objetos que hay en el array

let nombre = miArray[0]; //crea la variable nombre y llama el objeto 1 del array
console.log(nombre); //Imprime en consola la variable nombre

//Agregar objetos al array
//Metodos: Son los que nos permites agregar objetos al array

miArray.push("Carlos"); //Nos permite crear objetos al final del Array
console.log(miArray);

miArray.unshift("Agustin"); //Nos permite crear objetos al inicio del Array
console.log(miArray);

let final = miArray.pop(); //Nos permite quitar objetos del final de Array
console.log(miArray);

console.log(final);

let inicio = miArray.shift();
console.log(miArray);

console.log(inicio);

for (let i = 0; i < miArray.length; i++) {
  //miArray.length nos permite acceder al array
  console.log(miArray[i]); //miArray[i] lee todos los elementos de array
}
  
0,1,2|3

miArray.forEach((elemento) => {
  console.log(elemento);
});

//crear objetos

const persona = {
  nombre: "David",
  edad: 17,
  comidaFavorita: "Espagueti",
};

//acceder a una propiedad del objeto

let edad = persona.edad;
console.log(edad);

//editar una propiedad

persona.edad = 18;
console.log(persona.edad);

//Agregar una propiedad al objeto
/*Se realiza el mismo procedimiento que para editar una 
propiedad solo que esta ves se coloca la nueva porpiedad*/
persona.deportesFavoritos = "Tenis";
console.log(persona.deportesFavoritos);
console.log(persona);

//borrar una propiedad
/*Se coloca delete y se coloca el objeto y la propiedad 
que se quiere borrar */
delete persona.comidaFavorita;

//Recorrer / Iterar un objeto
for (let key in persona) {
  console.log(key, persona[key]);
}

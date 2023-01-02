//Es un concepto el JavaScript que es una esctructura de datos, es un tipo objeto. Es un valor que va a guardar mas valores adentro.
//Estos valores pueden ser numeros, string, objetos o nuevos arrays adentro.

var frutas = ["Manzana", "Banana", "Cereza", "Frutilla"];

console.log(frutas);

console.log(frutas.length)
// Con esto vemos la longitud, cuantos elementos tiene el array

console.log(frutas[0]);
//Regresa el elemento que esta posicionado en el elemento 0 (en el index 0).

//Cuando hablamos de arrays tenemos dos tipos de métodos para agregar o quitar elementos.

//Push añade elementos al final del array
var masFrutas = frutas.push("Uvas");

//Pop elimina el ultimo elemento del Array
var ultimo = frutas.pop("Uvas");

//Método unshift. Agrega al inicio de nuestro Array.

var nuevaFruta = frutas.unshift("Sandia");

//Metodo shift. Elimina el valor al inicio de nuestro Array.
var borrarFruta = frutas.shift("Uvas");

//Metodo indexof. Nos ayuda a saber la posicion de un elemento.
var posicion = frutas.indexOf("Cereza");
// **Params**

//Parámetros por defecto. Son valores que le pasamos a una función por defecto.

//Los parámetros por defecto (default params) consisten en establecer un valor por defecto a los parámetros de una función, para asegurar que el código se ejecute correctamente en el caso de que no se establezcan los argumentos correspondientes en la invocación de la función.

//Antes de ES6, se debía establecer una variable y utilizar el operador OR (||) con el valor por defecto necesario.

function newFunction (name, age, pais) {
  var name = name || 'Pablo';
  var age = age || 44;
  var country = country || 'AR';
  console.log(name, age, country);
}

// es6
//Con los parámetros por defectos añadidos en ES6, eliminamos las declaraciones para mejorar la legibilidad y el mantenimiento del código de la siguiente manera:
//Establecemos nuestros valores por defecto en la asignación.

function newFunction2(name = 'Pablo', age = 44, country = 'AR'){
  console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', '23', 'CO');

//** Template literals ** (Plantillas literales) **

//Las plantillas literales (template literals) consisten en crear cadenas de caracteres que puedan contener variables.

//Antes de ES6, si querías crear una cadena larga o un mensaje, debías utilizar la concatenación:

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Con template literals ``

//Con las plantillas literales añadidas en ES6, emplea el caracter ( ` ), que no es una comilla simple ( ’ ), para envolver el mensaje e incluir las variables con la sintaxis ${variable}.


let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhr);

//** Multilinea **

//Antes concatenabamos con \n

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" + "Otra frase multilínea.";

//ES6: usamos las comillas francesas ``

let lorem2 = `Esto es una frase épica.
Y Esto es otra frase épica.
`;

console.log(lorem);
console.log(lorem2);

//** Destructuracion de elementos **

let person = {
  "nombre": "Pablo",
  "edad" : 32,
  "pais": "AR",
}

console.log(person.nombre, person.edad);

let { nombre, edad } = person;
console.log(nombre, edad);

//** Operador de propagacion **

//Varios elemntos en arrays. Los queremos unir

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

//Let es una nueva forma de trabajar con variables. Con Let solamente esta disponible en el scope global, a diferencia de var que se usaba como variable global. 

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

//Const es una constante. No vamos a poder reasignar su valor.

const a = 'b';
a = 'a';
console.log(a); //Va a devolver error.

//es5
let name = 'Pablo';
let age = 44;

obj = { name: name, age: age };

//es6
obj2 = { name, age };

console.log(obj2);

//Arrow functions
//Sintaxis reducida - This no vinculable

const names = [
  {name: 'Oscar', age: 32},
  {name: 'Vanina', age: 27}
]

let listOfNames = names.map(function (item){
  
})
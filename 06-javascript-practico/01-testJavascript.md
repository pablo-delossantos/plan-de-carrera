## Preguntas Test de JavaScript

### Variables y operaciones

1.  Responde las siguientes preguntas en la sección de comentarios

Es un espacio reservado en memoria para almacenar datos.

Declarar una variable es asignarle un nombre, una "etiqueta" e inicializar una variable es asignarle a la misma un valor.

_var_ tiene alcance global.

_const_ tiene alcance de bloque. Un bloque es cualquier espacio entre llaves { }. Esta variable solo existe dentro del bloque donde fue definida. Las funciones tambien son consideradas como bloques.

_let_ tiene alcance de bloque. Es similar a const, con la diferencia que las variables pueden volver a ser declaradas.

Cuando usamos el operador + sumamos los valores. No es lo mismo que usar + para concatenar dos strings.

El operador que nos permite sumar o concatenar es +


2. Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

3.  

nombre = "Pablo"                  -> string
apellido = "de los Santos"        -> String
usuario = @pdelossantos           -> String
edad = 43                         -> Number
email = pdelossantos@nosis.com    -> String
mayoriaDeEdad = true              -> Boolean
dineroAhorrado = 150000           -> Number
deudas = 400000                   -> Number

4.  
const nombreCompleto = "Pablo de los Santos"
console.log(nombreCompleto);

const dineroAhorrado = 150000
const deudas = 400000

function dineroReal() {
console.log(dineroAhorrado - deudas);
}

dineroReal();

### funciones

1. Una funcion es un bloque de codigo que realiza una tarea o calcula un valor.

Podemos usar una funcion cuando necesitamos calcular un valor o hacer una accion.


Los paámetros son la lista de variables que usamos al definir una función. Los argumentos son los valores que pasamos a la funcion cuando la invocamos.

function sum(a, b) {
	return a + b;
} //a y b son parámetros.

const result = sum(7, 4); //7 y 4 son argumentos

2. Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función.

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";


console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
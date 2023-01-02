// Declarativas
// La funcion guarda ciertos valores.
function miFuncion() {
	return 3;
}

miFuncion();

// Expresión o Expresiva
// La funcion necesita parámetros para que la podamos utilizar. "Hay una funcion dentro de la variable." Tambien se las conocen como "Funcion anónima" => Se les aplica Hoisting.

var miFuncion = function(a,b) {
	return a + b;
}

miFuncion();

// Las funciones de expresion tambien se conocen como funciones anónimas. Aqui generamos una variable a la que le asignamos como valor una funcion, pero la funcion no tiene nombre. La mandamos a llamar como si fuera una variable. Las funciones necesitan parámetros.

//Plantilla de cadena de texto (String)
function saludarEstudiantes(estudiante) {
	console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Pablo");

//La salida es Hola Pablo
//Podemos conectar con una base de datos.

function sumar(a,b) {
	var resultado = a + b;
	return resultado;
}

sumar(4,5);

//O bien
function sumar(a,b) {
	return a + b;
}

sumar(4,5);
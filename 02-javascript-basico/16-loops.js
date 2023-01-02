//Un loop sirve para recorrer un arreglo
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
  console.log(`Hola, ${estudiante}`);
}

//Creamos el ciclo
//"Mientras la variabli i sea menor a la longitud completa del array estudiantes, se va a incrementar i por un número"
for(var i = 0; i < estudiantes.length; i++ ){
  console.log(estudiantes[i]);
}

//Otra manera de usar el loop for
//estudiante es el singular de un grupo que esta en el array estuduantes.
for (var estudiante of estudiantes){
  saludarEstudiantes(estudiante);
}

//Ciclo While
//"Mientras lo que este en la condicion sea verdad, va a ejecutar el loop de adentro de la funcion"

while(estudiantes.length > 0) {
  var estudiante = estudiantes.shift();
  saludarEstudiantes(estudiante);
}
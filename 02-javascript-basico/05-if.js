//Las condicionales son reglas para poder aplicar si algo es verdadero o falso

if (true) {
  console.log("Hola");
} else {
  console.log("Soy falso");
}


//En este caso, tenemos varias condiciones para comprobar

var edad = 18;

if (edad === 18) {
  console.log("Puedes votar; será tu primera votación");
} else if (edad > 18) {
  console.log("Puedes votar de nuevo");
} else {
  console.log("Aun no puedes votar");
}

//Operador ternario
//La condicion ? que es verdad : que es falso

condition ? true : false;

//Seria como usar un if y un else

var numero = 1;

var resultado = numero === 1 ? "Soy un uno" : "No soy uno";
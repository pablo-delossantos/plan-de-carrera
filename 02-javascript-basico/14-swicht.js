//Es una forma de generar una condicion, por casos. Si el casi es verdad, pasa algo. Sino, pasa al siguiente caso.

var numero = 1;

switch (numero) {
  case 1:
    console.log("Soy uno");
    break;
  case 10:
    console.log("Soy un 10");
    break;
  case 100:
    console.log("Soy un 100")
    break; 
  default:
    console.log("No soy nada");
}

//Siempre hay que generar el break.
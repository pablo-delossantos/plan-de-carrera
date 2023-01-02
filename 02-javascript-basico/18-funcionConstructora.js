//La funcion constructora sirve para generar un template para construir objetos.


//Primero creamos la función constructora.
function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

//La palabra new genera una instancia. Es decir un objeto que deriva de otro objeto
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);

//Reto
//Contruir una funcion contructoras para generar una lista de 30 autos que se genera sola
//loops ciclos, objeto, funcion contructora

var marca = ["Chevrolet", "Buick", "Plymouth", "AMC", "Ford", "Ford", "Chevrolet", "Plymouth", "Pontiac", "AMC", "Citroen", "Chevrolet", "Ford", "Plymouth", "Dodge", "Plymouth","Ford", "Chevrolet", "Buick", "Toyota",]

var modelo =["Chevelle", "Skylark", "Satellite", "Rebel", "Torino", "Galaxie", "Impala", "Fury", "Catalina", "Ambassador", "DS21", "Chevelle", "Torino", "Satellite", "Rebel", "Cuda 340", "Mustang", "Monte Carlo", "Estate Wagon", "Corona", ]

var annio = [1970, 1968, 1970, 1970, 1970, 1969, 1968, 1972, 1967, 1969, 1971, 1966, 1968, 1971, 1972, 1973, 1966, 1972, 1970, 1962, ]

function auto(marca, modelo, annio) {
  this.marca = marca;
  this.modelo = modelo;
  this.annio = annio;
}

for (var i = 0; marca.length > i && modelo.length > i && annio.length > i; i++);{
  var autoNuevo = new auto(marca[i], modelo[i],annio[i]);
  console.log(`autoNuevo ${this.marca} ${this.modelo} ${this.annio}`)
}
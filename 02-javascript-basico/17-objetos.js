//JavaScript es un lenguaje diseñado en un paradigama de objetos. Es como llevamos objetos del mundo real a objetos del mundo de la programación.
//Propiedades = clave valor

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
};

//Una de las propiedades del objeto puede ser una funcion que hace cosas con otra de las propiedades que estan dentro del objeto: Esta propiedad que lleva una función como valor es un METODO -> Metodos de objetos

var miAuto = {
  marca: "Toyota",
  modelo: "Corolla",
  annio: 2020,
  detalleDelAuto: function(){
    console.log(`Auto ${this.modelo} ${this.annio}`)
  }
};

//El this es una variable que hace referencia al objeto.
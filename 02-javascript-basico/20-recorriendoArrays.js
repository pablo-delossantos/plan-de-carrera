//Mas metodos para recorrer un array

var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "Television", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]

//Metodo Find: nos ayuda a encontrar algo dentro del objeto
var encuentraArticulo = articulos.find(function(articulo){
  return articulo.nombre === "Laptop"
});

//Foreach: filtra cada elemento de nuestro array

articulos.forEach(function(articulo){
  console.log(articulo.costo);
});

//Some() genera un verdadero o falso
var articulosBaratos = articulos.some(function(articulo){
  return articulo.costo <= 700;
});
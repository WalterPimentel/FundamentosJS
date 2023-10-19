/** Objetos */

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

console.log(producto)// muestra parecido a JSON o XML
console.table(producto)
console.log("")

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)
console.log("")

//Destructuring (sacar variables fuera del objeto)

const { nombre, precio, disponible, variableNueva } = producto //se esta extrayendo valores del objeto producto, puedes crear nueva variable

console.log(nombre)
console.log(precio)
console.log(disponible)

//Objet Literal Enhacement (poner variables dentro del objeto)

const autenticado = true
const usuario = "Walter"

const nuevoObjeto = {
    autenticado: autenticado, //cuando ambos son iguales no es necesario llamar a la variable de afuera (ejemplo con usuario abajo)
    usuario, 
}

console.table(nuevoObjeto)
/** Objetos - Destructuring con 2 o más Objetos */

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Walter',
    premium: true
}

const { nombre: nombreProducto, precio, disponible } = producto
const { nombre: nombreCliente, premium } = cliente

console.log(nombreProducto)
console.log(nombreCliente)
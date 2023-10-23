/* Template Strigs */

import {textoDeFuncion} from "./funciones.js"

const producto = "Tablet de 12 pulgadas"
const precio = 400
const marca = "Orange"

// Esta sintaxis no es la mejor o la mas clara
console.log(producto + " a S/." + precio + " Soles, Marca: " + marca, textoDeFuncion())

// Esta sintaxis es mas clara
console.log(`${producto} a S/.${precio} Soles, Marca: ${marca}, ${textoDeFuncion()}`)
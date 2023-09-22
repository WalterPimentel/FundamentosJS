/** Tipos de datos */

// Undefined

let cliente

console.log(cliente)
console.log(typeof cliente) // typeof es una forma de verificar y mostrar el tipo de dato que es la variable
console.log("")

// Boolean

const descuento = true

console.log(descuento)
console.log(typeof descuento)
console.log("")

// Number

const numero1 = 20.20
const numero2 = 30
const numero3 = -100

console.log(typeof numero1)// todos sin tipo number no existe tipo float, int, etc solo number
console.log(typeof numero2)
console.log(typeof numero3)
console.log("")

// String

const alumno = "Juan"
const alumno2 = 'Beto' // con comilla simple o doble a cualquier variable tipo string
let producto = 'Monitor 20 pulgadas'
let producto2 = "Monitor 50 pulgadas"
const nro = "30"
const nro2 = 30

console.log(typeof nro)
console.log(typeof nro2)
console.log("")// el espacio tambien se asigna como tipo string

// BigInt

const numeroGrande = BigInt(99999999999999999999999999999999)

console.log(typeof numeroGrande)

const sumando1 = 10
const sumando2 = 20

console.log(sumando1 + sumando2)
//console.log(sumando1 + numeroGrande) // error no se puede mezclar la suma de un Number con BigInt
console.log(sumando1 + Number(numeroGrande))
console.log("")

// Symbol

const  primerSymbol = Symbol(30)
const  segundoSymbol = Symbol(30)

console.log(primerSymbol === segundoSymbol) // saldra false porque un tipo Symbol siempre tendran valores unicos

console.log(primerSymbol.valueOf())
console.log(segundoSymbol.valueOf())
console.log("")

// Null

const desct = null

console.log(typeof desct) // null es de tipo Objet
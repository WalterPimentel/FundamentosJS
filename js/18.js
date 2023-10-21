/* Comparación y Operador Estricto */

const numero1 = 20
const numero2 = "20"

/* 

    == (Comparación pero no es estricto)
    === (Comparación Estricta)

*/

console.log(typeof numero1)
console.log(typeof numero2)

if (numero1 === numero2) console.log('Si!, son iguales')
else console.log('No, no son iguales')

const auntenticado = true

if (auntenticado) console.log('Si esta auntenticado')
/* Otros Arrays Methods Útiles */

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
const numeros = [10, 20, 30]

let nuevoArray

// Filter
nuevoArray = tecnologias.filter(tech => tech !== 'React')

// Comprobar si un Elemento existe en un Array
// const resultado =  tecnologias.includes('React')

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numeros.some(numero => numero > 15)

// Find - Devuelve el primer elemento que cumple la condición
// const resultado = numeros.find(numeros => numeros > 15)

// Every - Devuelve true o false si todos cumplen con la condición
// const resultado = numeros.every(numeros => numeros > 15)

// Reduce - Acumulando en el total, 0 es que va sumar desde ese numero.Ej: si pones 7 sumara desde 7 = 67
// const resultado = numeros.reduce((total, numero) => numero + total, 0)

// Filter - Crea un nuevo array en base a una condición
// const resultado = tecnologias.filter(tech => tech === 'Node.js')
// const resultado = numeros.filter(numero => numero !== 10)

// console.log(resultado)

tecnologias.forEach((tech, index) => console.log(index, tech))

const arrayMap = tecnologias.map(tech => tech)

console.log(arrayMap)

/* Para ver que otros parametros usar y saber si es mutrable o no */
// https://doesitmutate.xyz/
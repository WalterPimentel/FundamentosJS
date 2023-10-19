/* Iteradores de Arreglos */

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// forEach

const arrayForeach = tecnologias.forEach(function(tech){ // Acceder a cada elemento de tecnologias
    return tech
})

const arrayMap = tecnologias.map(function(tech){ // Acceder a cada elemento de tecnologias, pero map es tambien para crear un nuevo arreglo
    return tech
})

console.log(arrayForeach)
console.log("")
console.log(arrayMap)
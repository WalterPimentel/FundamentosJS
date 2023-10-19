/** Operaciones en los Arreglos */

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

/** Añadir Elementos al Array */

// tecnologias.push('GraphQL') // Añade al final del Array (NO)
// tecnologias.unshift('GraphQL') // Añade al inicio del Array (NO)

// const nuevoArreglo = [...tecnologias, 'GraphQL'] // Añade al final del Array (RECOMENDABLE)
// const nuevoArreglo = ['GraphQL', ...tecnologias] // Añade al inicio del Array (RECOMENDABLE)

/** Eliminar Elemetnos al Array */

// tecnologias.pop() // Elimina del Final
// tecnologias.shift() // Elimina del Inicio
// tecnologias.splice(2, 1) // Elimina desde el indice y la cantidad de elementos

// const nuevoArray = tecnologias.filter( function(imprime){
//     return imprime !== 'HTML'
// } )

/** Reemplazar Elementos al Array */

// tecnologias[0] = 'GraphQL'
const nuevoArray = tecnologias.map(function(tech){
    if (tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)
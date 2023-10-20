/* Funciones - Function Declaration */

// function sumar(numero, numero2 = 0) { // lo que está dentro del parentesis se llama parámetros
//     console.log(numero + numero2)
// }

// sumar(10, 20) // los valores dentro del parentesis son los argumentos
// sumar(2, 3)
// sumar(100)
// sumar()

/* Funciones que Retornan Valores */

function sumar(numero, numero2 = 0) {
    return {
        resultado: numero + numero2, 
        saludo: 'Hola Mundo'
    }
}

const {resultado, saludo} = sumar(20, 30)
console.log(resultado)
console.log(saludo)
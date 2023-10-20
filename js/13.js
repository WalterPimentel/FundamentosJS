/* Funciones - Function Expression */

// sumar() // Error la variable sumar aun no fue creada

const sumar = function (numero, numero2) { // Esta es Function Expression
    return numero + numero2
}

const resultado = sumar(30, 20) // Se llama o ejecuta debado de la funcion porque la variable ya fue creada
console.log(resultado)
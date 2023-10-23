/* Funciones */

function sumar(numero1, numero2) {
    return numero1 + numero2
    // Para 28.js
}

function restar(numero1, numero2) {
    return numero1 - numero2
    // Para 28.js
}

function textoDeFuncion() {
    return "Este texto proviene de la función"
    // Para 32.js
}

export {
    sumar,
    restar,
    textoDeFuncion
}

// Exportar la funcion para importar en otro archivo
// export default sumar // default es que al importar va cargar en automatico
// export default restar // saladra error por que solo puede haber un default por archivo
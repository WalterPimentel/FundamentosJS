/* Eventos del DOM - Inputs */

const inputNombre = document.querySelector('.nombre')
inputNombre.placeholder = 'Ingrese su nombre'

inputNombre.addEventListener('input', function (evento) { // Ejecuta con cualquier evento en donde rellene el input o precione cualquier tecla
    console.log(evento.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', functionPassword)

function functionPassword() {
    inputPassword.type = 'text'
    setTimeout(() => {
        inputPassword.type = 'password'
    }, 200);
}

// inputNombre.addEventListener('keydown', function () { // Ejecuta solo ejecuta cuando escribes o precionas una tecla
//     console.log('Escribiendo en el input')
// })

// inputNombre.addEventListener('keyup', function () { // Ejecuta cuando terminas de precionar la tecla
//     console.log('Escribiendo en el input')
// })
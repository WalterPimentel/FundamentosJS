/* Generadon código HTML con JavaScript */

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', evento => {
    evento.preventDefault()
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    const alertaPrevia = document.querySelector('.alerta')
    if (alertaPrevia) alertaPrevia.remove()

    const alerta = document.createElement('DIV') // Al generar elementos HTML es recomendable poner en mayúsculas las etiquetas
    alerta.classList.add('alerta')

    if (nombre !== '' && password !== '') {
        alerta.textContent = 'Todo bien, enviando...'
        alerta.classList.add('exito')
    } else {
        alerta.textContent = 'Todos los campos son obligatorios'
        alerta.classList.add('error')
    }

    formulario.appendChild(alerta)
})
/* Eventos del DOM - Submit */

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', evento => {
    evento.preventDefault() // previene la accion por defecto para realizar las acciones de abajo
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    if(nombre !== '' && password !== ''){
        console.log('Todo bien, enviando...')
    }else console.log('Todos los cambos son obligatorios')
})
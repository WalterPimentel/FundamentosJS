/* Eventos del DOM - Clicks */

const heading = document.querySelector('.heading')

// const clickHeading = function() {
//     console.log('Diste click en heading')
// }

// const clickHeading = () => {
//     console.log('Diste click en heading')
// }

heading.addEventListener('click', clickHeading/* () */) //Si agregas el parentecis va ejecutar de inmediatamente sin dar click

function clickHeading() {
    console.log('Diste click en heading')
}

heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo Heading al dar click'
})

const enlaces = document.querySelectorAll('.navegacion a')

enlaces.forEach(enlace => {
    enlace.addEventListener('click', () => {
        console.log('Diste click a un enlace')
    })
})
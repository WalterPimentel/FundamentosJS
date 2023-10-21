/* Condicionales - Ternarios */

const autenticado = true

autenticado ?
    console.log('Usuario Autenticado') :
    console.log('No autenticado, dirigir hacia el login')

// Doble ternario

const saldo = 600
const pagar = 800
const tarjeta = true

saldo > pagar ?
    console.log('Puedes pagar con saldo') :
    tarjeta ?
        console.log('Puedes pagar con tarjeta') :
        console.log('No, no puedes pagar')
/* Fetch API - Async Await */

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarApi = async () => { // async hace a la funcion asincrona
    // await espera que se ejectue y tenga resultado de la linea de codigo para continuar al siguiente
    const respuesta = await fetch(url)
    console.log('Respuesta ejecutada')
    const resultado = await respuesta.json()
    console.log('Resultado ejecutado')

    resultado.forEach(comentario => {
        console.log(comentario)
    });
}
consultarApi()
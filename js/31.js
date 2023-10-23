/* Fetch API - Async Await y Perfonmance (Multiples llamados) */

const url = "https://jsonplaceholder.typicode.com/comments"
const url2 = "https://jsonplaceholder.typicode.com/photos"

const consultarApi = async () => {
    const inicio = performance.now()

    console.log("iniciando primera consulta")
    // con este método ejecutan uno por uno y demoran mas
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    console.log(resultado)
    console.log("fin primera consulta")

    console.log("iniciando segunda consulta")

    const respuesta2 = await fetch(url2)
    const resultado2 = await respuesta2.json()
    console.log(resultado2)

    console.log("fin segunda consulta")

    const fin = performance.now()

    console.log(`Ejecucion PRIMER Async: ${fin - inicio} ms`)
}
consultarApi()

const consultarApi2 = async () => {
    const inicio = performance.now()
    console.log("iniciando consulta en paralelo")
    // con este método ejecutan las dos respuestas en paralelo
    const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)])

    const resultado = await respuesta.json()
    const resultado2 = await respuesta2.json()

    console.log(resultado)
    console.log(resultado2)
    console.log(`fin consulta en paralelo`)

    const fin = performance.now()

    console.log(`Ejecucion SEGUNDO Async: ${fin - inicio} ms`)
}
consultarApi2()
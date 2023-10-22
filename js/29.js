/* Fetch API y Promises */ // Es el nuevo Ajax

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarApi = () => {
    // fetch es API que remplaza a Ajax, es una funcion
    fetch(url)
        .then(respuesta => respuesta.json()) // then es una promise
        .then(resultado => {
            resultado.forEach(comentario => {
                console.log(comentario)
            });
        })
}
consultarApi()
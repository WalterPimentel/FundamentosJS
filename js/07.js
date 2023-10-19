// Unir 2 o más Objetos

const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Walter',
    premium: true
}

 // const nuevoObjeto = Object.assign(producto, cliente)// NO, como el nombre es igual en producto y cliente, solo toma este ultimo
 const nuevoObjeto2 = {
    producto: {...producto},
    cliente: {...cliente}
  }// los tres puntos es tomar copia del objeto
 console.log(nuevoObjeto2)
 
 // verificar que las variables no se modificaron
 console.log(cliente)
 console.log(producto)
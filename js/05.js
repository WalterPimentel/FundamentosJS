/** Objetos - Manipulación */

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

//Object.freeze(producto) // ya no puede reescribir o modifcar el objeto

//Object.seal(producto) //permite resscribir las propiedades existentes, pero no permite añadir nuevas o eliminarlas

//Reescribir un valor
producto.nombre = "Monitor Curvo"

producto.imagen = "imagen.jpg" //si no existe, lo va añadir

delete producto.disponible // eliminar

console.table(producto)
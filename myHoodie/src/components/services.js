const productos = [
    { id: "1", nombre: "Hoodie Oversize Snow Negro", precio: 35000, categoria: "hoodies" },
    { id: "2", nombre: "Hoodie Oversize Snow Tinto", precio: 35000, categoria: "hoodies" },
    { id: "3", nombre: "Hoodie Lienzo Negro", precio: 27000, categoria: "hoodies" },
    { id: "4", nombre: "Hoodie Lienzo Blanco", precio: 27000, categoria: "hoodies" },
    { id: "5", nombre: "Remera Oversize Rubi Negra", precio: 13000, categoria: "remeras" },
    { id: "6", nombre: "Remera Ana White", precio: 13000, categoria: "remeras" },
    { id: "7", nombre: "Remera Kush Gris", precio: 13000, categoria: "remeras" },
    { id: "8", nombre: "Campera Rompeviento Negra", precio: 40000, categoria: "camperas" },

]






// FUNCIONES - PROMESESAS
// get product
export const getProductos = (id) => {

    return new Promise((resolve, reject) => {

        // simulacion llamada a Backend
        setTimeout(() => {

            const producto = productos.find(producto => producto.id === id)

            if (producto) {
                resolve(producto)
            } else {
                reject("El producto buscado no se encuentra disponible")
            }


        }, 1000)
    })
}




//get products
export const getCategorias = (categoria) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let productosCategoria

            if (categoria) {
                productosCategoria = productos.filter(producto => producto.categoria === categoria)
            } else {
                productosCategoria = productos;
            }

            resolve(productosCategoria);

        }, 1000)

    });

}

export default getCategorias



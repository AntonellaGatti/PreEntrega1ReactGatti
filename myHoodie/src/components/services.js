import { doc, getDoc, collection, getDocs, query, getFirestore, where } from "firebase/firestore";



// const productos = [
//     // { id: "1", nombre: "Hoodie Oversize Snow Negro", precio: 35000, categoria: "hoodies" },
//     // { id: "2", nombre: "Hoodie Oversize Snow Tinto", precio: 35000, categoria: "hoodies" },
//     // { id: "3", nombre: "Hoodie Lienzo Negro", precio: 27000, categoria: "hoodies" },
//     // { id: "4", nombre: "Hoodie Lienzo Blanco", precio: 27000, categoria: "hoodies" },
//     // { id: "5", nombre: "Remera Oversize Rubi Negra", precio: 13000, categoria: "remeras" },
//     // { id: "6", nombre: "Remera Ana White", precio: 13000, categoria: "remeras" },
//     // { id: "7", nombre: "Remera Kush Gris", precio: 13000, categoria: "remeras" },
//     // { id: "8", nombre: "Campera Rompeviento Negra", precio: 40000, categoria: "camperas" },

// ]




// FUNCIONES - PROMESESAS
// get product
export const getProductos = (id) => {

    return new Promise((resolve, reject) => {
        // simulacion llamada a Backend
        setTimeout(() => {
            const db = getFirestore();
            const itemDoc = doc(db, "productos", id);

            getDoc(itemDoc)
                .then((doc) => {

                    if (doc.exists()) {
                        resolve({
                            id: doc.id,
                            ...doc.data(),
                        });
                    } else {
                        resolve(null);
                    };
                })
                .catch((error) => {
                    reject(error)
                })

        }, 1000)
    })
}




//get products
export const getCategorias = (categoria) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const db = getFirestore();

            const productsCollection = collection(db, 'productos');

            let q
            if (categoria) {
                q = query(productsCollection, where("categoria", "==", categoria));
            } else {
                q = query(productsCollection);
            }

            getDocs(q)
                .then((querySnapshot) => {
                    const products = querySnapshot.docs.map((doc) => {
                        return {
                            id: doc.id,
                            ...doc.data()
                        };
                    });
                    resolve(products)
                })
                .catch((error) => {
                    reject(error)
                })

        }, 1000)

    });

}

export default getCategorias

// total productos en carrito
export const getCartQuantity = (cart) => {

    let count = 0

    cart.forEach((item) => {
        count += item.cantidad
    });

    return count;

}

// total precio carrito
export const calculateTotalCart = (cart) => {

    let total = 0

    cart.forEach((item) => {
        total += item.cantidad * item.precio
    });

    return total;
}

// map Items Carrito para completar la Orden
 export const mapCartToOrder = (cart) => {
    return cart.map(item => ({
        nombre: item.id.nombre,
        id: item.id.id,
        cantidad: item.cantidad,
        precio: item.id.precio,
    }));
};




import { doc, getDoc, collection, getDocs, query, getFirestore, where } from "firebase/firestore";


// FUNCIONES - PROMESESAS

export const getProductos = (id) => {

    return new Promise((resolve, reject) => {
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
        nombre: item.nombre,
        id: item.id,
        cantidad: item.cantidad,
        precio: item.precio,
    }));
};




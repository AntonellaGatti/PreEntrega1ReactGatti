import CartContext from "../Context/CartContext";
import { useContext, useState } from "react";
import { mapCartToOrder, calculateTotalCart } from "../services"
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from "./CheckOut.module.css"

const CheckOut = () => {
    const { cart, vaciarCarrito } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null)

    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
    })

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const createOrder = () => {
        const orderInfo = {
            buyer: formData,
            items: mapCartToOrder(cart),
            total: calculateTotalCart(cart),
            date: serverTimestamp(),
        };

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        console.log(orderInfo)
        

        addDoc(ordersCollection, orderInfo)
            .then((docRef) => {
                setOrderId(docRef.id)
                console.log("Orden Creada con ID", docRef.id);
            })
            .catch((error) => {
                console.log("Error al crear la orden:", error)
            })
        vaciarCarrito();

    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        // falta limpiar formulario o crear funcion afuera por ejemplo handleReset y aca solo llamas a la funcion
        createOrder();
    }

    return (
        <div>
            <h1>CheckOut</h1>
            {orderId
                ? (<h2 className={`text-center pt-5 mb-0`}> Tu Orden fue generada con el id: {orderId}</h2>)
                : (
                    <>
                        <h2>Detalle de la compra</h2>
                        <ul className="">
                            {cart.map((item) => (
                                <li key={item.id} className={`list-group-item d-flex align-items-center justify-content-around m-3 rounded ${styles['checkout-detail']}`}>
                                    <img src={`../imgPublic/${item.imageId}.jpg`} className={`img-fluid ${styles['checkout-img']}`} />
                                    <p>{item.cantidad} x </p>
                                    <p>{item.nombre}</p>
                                    <p>Precio: ${item.precio * item.cantidad}</p>
                                </li>
                            ))}
                        </ul>

                        <h3>Formulario</h3>
                        <div className="container justify-content-center">
                            <form onSubmit={handleSubmit}>
                                <div class="form-group m-3">
                                    <label for="nombre">Nombre</label>
                                    <input type="text" className="form-control" name="nombre" placeholder="Ingresar Nombre" required onChange={handleInput} value={formData.nombre} />
                                </div>
                                <div class="form-group m-3">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder="Ingresar Mail" required onChange={handleInput} value={formData.email} />
                                </div>
                                <div class="form-group m-3">
                                    <label for="telefono">Número de teléfono</label>
                                    <input type="number" className="form-control" name="telefono" placeholder="Ingresar teléfono" required onChange={handleInput} value={formData.telefono} />
                                </div>
                                <div class="form-group m-3">
                                    <label for="direccion">Dirección de envío</label>
                                    <input type="text" className="form-control" name="direccion" placeholder="Ingresar dirección de envío" required onChange={handleInput} value={formData.direccion} />
                                </div>
                                <button type="submit" class="btn btn-light">Crear Orden</button>
                            </form>
                        </div>
                    </>
                )}

        </div>
    )
};

export default CheckOut;


import CartContext from "../Context/CartContext";
import { useContext, useState } from "react";
import { Link } from 'react-router-dom';
import { mapCartToOrder, calculateTotalCart } from "../services"
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import styles from "./CheckOut.module.css"

const CheckOut = () => {
    const { cart, vaciarCarrito } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null)
    const totalCart = calculateTotalCart(cart)
    const [isLoading, setIsLoading] = useState(false);


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
        setIsLoading(true);
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
            .finally(() => {
                setIsLoading(false);
                vaciarCarrito();
            })

    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        // falta limpiar formulario o crear funcion afuera por ejemplo handleReset y aca solo llamas a la funcion
        createOrder();
    }

    return (
        <div>
            <h1 className="text-center mt-5">CheckOut</h1>
            {isLoading 
            ?
                (<div className="text-center m-3">
                    <h2 className="mt-5">Procesando formulario...</h2>
                </div>)
            :
                orderId
                    ? (<div className="d-flex flex-column align-items-center">
                        <h2 className={`text-center mb-5`}> Gracias por tu compra!</h2>
                        <h3 className="mt-5">Tu Orden fue generada con el id: {orderId} </h3>
                        <h4 className="mb-5">A la brevedad nos estaremos contactando con los datos para la transferencia</h4>
                        <Link to="/">
                            <button type="button" className={`btn btn-light ${styles['btn-cart']}`}>
                                <span>Seguir Comprando</span>
                                <i className={`bi bi-bag-plus-fill ${styles['icons-cart']}`}></i>
                            </button>
                        </Link>
                    </div>)
                    : (
                        <div>
                            <h2 className="text-center">Detalle de la compra</h2>
                            <ul className="">
                                {cart.map((item) => (
                                    <li key={item.id} className={`list-group-item d-flex align-items-center justify-content-around m-3 rounded ${styles['checkout-detail']}`}>
                                        <img src={`../imgPublic/${item.imageId}.jpg`} className={`img-fluid ${styles['checkout-img']}`} />
                                        <p>{item.cantidad} x </p>
                                        <p>{item.nombre}</p>
                                        <p>Precio: ${item.precio * item.cantidad}</p>
                                    </li>
                                ))}
                                <li className={`list-group-item d-flex align-items-center justify-content-around m-3 rounded ${styles['checkout-detail']}`}>
                                    <h5>El total sin envio es $ {totalCart}</h5>
                                </li>
                            </ul>
                            <h3 className="text-center mt-5">Por favor completá el Formulario para finalizar la compra:</h3>
                            <div className="container justify-content-center fs-5">
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group m-3">
                                        <label for="nombre">Nombre</label>
                                        <input type="text" className="form-control" name="nombre" placeholder="Ingresar Nombre" required onChange={handleInput} value={formData.nombre} />
                                    </div>
                                    <div className="form-group m-3">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" name="email" placeholder="Ingresar Mail" required onChange={handleInput} value={formData.email} />
                                    </div>
                                    <div className="form-group m-3">
                                        <label for="telefono">Número de teléfono</label>
                                        <input type="text" className="form-control" name="telefono" placeholder="Ingresar teléfono" required onChange={handleInput} value={formData.telefono} />
                                    </div>
                                    <div className="form-group m-3">
                                        <label for="direccion">Dirección de envío</label>
                                        <input type="text" className="form-control" name="direccion" placeholder="Ingresar dirección de envío" required onChange={handleInput} value={formData.direccion} />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className={`btn btn-light ${styles['btn-cart']}`}>Crear Orden
                                            <i className={`bi bi-cart-check-fill ${styles['icons-cart']}`}></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

        </div>
    )
};

export default CheckOut;


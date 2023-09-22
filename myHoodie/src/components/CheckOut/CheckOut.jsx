import CartContext from "../Context/CartContext";
import { useContext } from "react";
import { serverTimestamp } from "firebase/firestore";
import styles from "./CheckOut.module.css"

const CheckOut = () => {

    const { cart, vaciarCarrito } = useContext(CartContext);
    // const [orderId, setOrderId] = useState(null);

    return (
        <div>
            <h1>CheckOut</h1>
            <h2>Detalle de la compra</h2>
            <ul className="">
                {cart.map((item) => (
                    <li key={item.id} className={`list-group-item d-flex align-middle m-3 rounded ${styles['checkout-detail']}`}>
                        <img src={`../imgPublic/${item.imageId}.jpg`} className={`img-fluid ${styles['checkout-img']}`} />
                        <p>{item.cantidad} x </p>
                        <p>{item.nombre}</p>
                        <p>Precio: ${item.precio * item.cantidad}</p>
                    </li>
                ))}
            </ul>

            <h3>Formulario</h3>
            <div className="container justify-content-center">
            <form>
                <div class="form-group m-3">
                    <label for="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Ingresar Nombre" />
                </div>
                <div class="form-group m-3">
                    <label for="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Ingresar Mail" />
                </div>
                <div class="form-group m-3">
                    <label for="telefono">Número de teléfono</label>
                    <input type="number" className="form-control" id="telefono" placeholder="Ingresar teléfono" />
                </div>
                <div class="form-group m-3">
                    <label for="direccion">Dirección de envío</label>
                    <input type="text" className="form-control" id="direccion" placeholder="Ingresar dirección de envío" />
                </div>
                <button type="submit" class="btn btn-light">Crear Orden</button>
            </form>
            </div>
        </div>
    )
};

export default CheckOut;


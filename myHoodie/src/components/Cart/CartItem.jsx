import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { calculateTotalCart } from "../services";
import { Link } from 'react-router-dom';
import styles from "./CartItem.module.css"


const CartItem = () => {
    const { cart, removeItemCarrito, vaciarCarrito } = useContext(CartContext)

    const isEmpty = cart.length === 0;

    const totalCart = calculateTotalCart(cart)

    const handleRemoveItem = (item) => {
        console.log(`Borrando item con Id ${item.id}`);
        removeItemCarrito(item.id)
    }

    return (
        <div>
            <h1 className="text-center mt-5">Tu Carrito</h1>

            {isEmpty
                ? (<div className="d-flex flex-column justify-content-center align-items-center">
                    <h2 className="m-5">El carrito se encuentra vacio</h2>
                    <Link to="/">
                        <button type="button" className={`btn btn-light mt-5 ${styles['btn-cart']}`}>
                            <span>Volver a ver los Productos</span>
                            <i className={`bi bi-arrow-left ${styles['icons-cart']}`}></i>
                        </button>
                    </Link>

                </div>)
                : (
                    <>
                        <ul className="d-flex flex-row justify-content-center mt-5 ">
                            {cart.map((item) => (
                                <li key={item.id} className={`list-group-item m-3 rounded text-center ${styles['custom-card-cart']}`}>
                                    <img src={`../imgPublic/${item.imageId}.jpg`} className={`img-fluid ${styles['img-detail-cart']}`} />
                                    <h4>{item.nombre}</h4>
                                    <p>Precio: AR$ {item.precio}</p>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <p>Subtotal: ${item.precio * item.cantidad}</p>
                                    <button type="button" className="btn btn-light mt-3 px-5" onClick={() => { handleRemoveItem(item) }}>Borrar Item</button>
                                </li>
                            ))}
                        </ul>
                        <div className="d-flex flex-column justify-content-center mt-5">

                            <h3 className="text-center mb-3">El total de la compra es de ${totalCart}</h3>
                            <div className="d-flex flex-row justify-content-center">
                                <button type="button" className={`btn btn-light ${styles['btn-cart']}`} onClick={vaciarCarrito}>
                                    <span className="mr-3">Eliminar el Carrito</span>
                                    <i className={`bi bi-cart-x-fill ${styles['icons-cart']}`}></i>
                                </button>
                                <Link to="/">
                                    <button type="button" className={`btn btn-light ${styles['btn-cart']}`}>
                                        <span>Seguir Comprando</span>
                                        <i className={`bi bi-bag-plus-fill ${styles['icons-cart']}`}></i>
                                    </button>
                                </Link>
                                <Link to="/checkout">

                                    <button type="button" className={`btn btn-light ${styles['btn-cart']}`}>
                                        <span>Finalizar Compra</span>
                                        <i className={`bi bi-credit-card-2-back-fill ${styles['icons-cart']}`}></i>

                                    </button>
                                </Link>

                            </div>
                        </div>

                    </>
                )
            }
        </div>
    )

}

export default CartItem;
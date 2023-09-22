import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { calculateTotalCart } from "../services";
import { Link } from 'react-router-dom';
import styles from "./CartItem.module.css"


const CartItem = () => {
    const { cart, removeItemCarrito , vaciarCarrito} = useContext(CartContext)

    const isEmpty = cart.length === 0;

    const totalCart = calculateTotalCart(cart)

    const handleRemoveItem = (item) => {
        console.log(`Borrando item con Id ${item.id}`);
        removeItemCarrito(item.id)
    }

    return (
        <div>
            <h1>Tu Carrito</h1>

            {isEmpty
                ? ('El carrito se encuentra vacio :(')
                : (
                    <>
                    <ul className="d-flex mt-5">
                        {cart.map((item) => (
                            <li key={item.id} className={`list-group-item m-3 rounded text-center ${styles['custom-card-cart']}`}>
                                 <img src={`../imgPublic/${item.imageId}.jpg`} className={`img-fluid ${styles['img-detail-cart']}`} />
                                <h4>{item.nombre}</h4>
                                <p>Precio: AR$ {item.precio}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Subtotal: ${item.precio * item.cantidad}</p>
                                <button type="button" className="btn btn-light mt-3 px-5" onClick={()=>{handleRemoveItem(item)}}>Borrar Item</button>
                            </li>
                        ))}
                    </ul>
                    <h3>El total de la compra es de ${totalCart}</h3>
                    <button type="button" className="btn btn-light mt-3 px-5" onClick={vaciarCarrito}>Eliminar el Carrito</button>
                    <Link to="/checkout">
                    <button type="button" className="btn btn-light mt-3 px-5">Finalizar compra</button>
                    </Link>

                    </>
                )
            }
        </div>
    )

}

export default CartItem;
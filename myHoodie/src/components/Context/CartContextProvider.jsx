import { useState } from "react";
import CartContext from "./CartContext";


const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItemCarrito = (item, cantidad) => {
        const itemEnCarrito = cart.find((item) => item.id === item.id);

        if (itemEnCarrito) {
            const newCart = cart.map((item) => {
                if (item.id === item.id) {
                    return {
                        ...item,
                        cantidad: item.cantidad + cantidad,
                    };
                }
                return item;
            });
            setCart(newCart);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
        console.log(cart)
    };



    function removeItemCarrito(itemId) {
        setCartLista(cart.filter(item => item.id !== itemId))
    }
    function vaciarCarrito() {
        setCart([])
    }



    return (
        <CartContext.Provider value={{ cart, addItemCarrito, removeItemCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider


// 1- no puedo actualizar el count del ItemQuantitySelector con el cartcontext
// 2- Cuando agrego items al carrito siempre se agrega el mismo (ej agrego una campera, pero luego cuando apriento el agregar carrito de uan remera, me agregar camperas al carrito y no la remera)
// 3- no se actualiza el cartwidget
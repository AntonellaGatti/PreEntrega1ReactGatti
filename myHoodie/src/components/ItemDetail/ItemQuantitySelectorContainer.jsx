// Maneja Logica
import { useState, useContext } from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";
import CartContext from "../Context/CartContext";


const ItemQuantitySelectorContainer = ({item}) => {
    const [count, SetCount] = useState(0);

    const { addItemCarrito } = useContext(CartContext); 

   

    const Incrementar = () => {
        SetCount(count +1)

    }

    const Reducir = () => {
        if (count >= 1) { 
            SetCount(count - 1);
        }

    }

 const handleAddToCart = () => {
        addItemCarrito(item, count); 
        SetCount(0);
    }
 
    // TODO -- VALIDACION STOCK

    return ( 
        <ItemQuantitySelector 
        count={count}
        Incrementar={Incrementar}
        Reducir= {Reducir}
        item={item}
        handleAddToCart={handleAddToCart}
        />

    )

}

export default ItemQuantitySelectorContainer;
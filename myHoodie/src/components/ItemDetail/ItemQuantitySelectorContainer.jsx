// Maneja Logica
import { useState } from "react";
import ItemQuantitySelector from "./ItemQuantitySelector";


const ItemQuantitySelectorContainer = () => {
    const [count, SetCount] = useState(0);

    const Incrementar = () => {
        SetCount(count +1)
        console.log(count)

    }

    const Reducir = () => {
        if (count > 1) { // Agrega una validación para que el contador no baje de 1
            SetCount(count - 1);
        }

    }
    // TODO -- VALIDACION STOCK

    return ( 
        <ItemQuantitySelector 
        count={count}
        Incrementar={Incrementar}
        Reducir= {Reducir}
        />

    )

}

export default ItemQuantitySelectorContainer;
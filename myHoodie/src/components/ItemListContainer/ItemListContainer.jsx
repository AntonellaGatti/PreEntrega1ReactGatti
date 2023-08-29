// Maneja la Lógica

import { useState,useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import getCategoria from "../services";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
         getCategoria()
         .then((response) => (console.log(response)))
    } ,[])





    return (

        <div className="d-flex justify-content-center align-items-center vh-100">
            <ItemList item={items} />
        </div>

    )
}

export default ItemListContainer;
// Maneja la Lógica

import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import getCategoria from "../services";



const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {idCategoria} = useParams()


    // se ejecuta cuando el componente se carga
    useEffect(() => {
         getCategoria(idCategoria)
         .then((response) => (setItems(response)))
         .catch((error) => (console.log(error)))
    } ,[idCategoria])



    return (

        <div className="d-flex justify-content-center align-items-center mt-5">
            <ItemList item={items} />
        </div>

    )
}

export default ItemListContainer;
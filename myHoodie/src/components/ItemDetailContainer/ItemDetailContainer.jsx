//Maneja la logica
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getProductos} from "../services";

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getProductos(id)
            .then((response) => ( 
                console.log(response),
                setItem(response)
            ))
            .catch(error =>  (
                console.log(error),
                setItem(null)
                ));

    }, [id])


    return <ItemDetail item={item}/>
}

export default ItemDetailContainer

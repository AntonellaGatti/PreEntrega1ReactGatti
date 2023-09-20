//Maneja la logica
import { useState, useEffect,useContext } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import {getProductos} from "../services";
import CartContext from "../Context/CartContext";


const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const { id } = useParams()
    let context = useContext(CartContext)


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

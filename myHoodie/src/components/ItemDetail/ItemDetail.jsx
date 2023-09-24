// Contenedor de Presentacion 
import ItemQuantitySelectorContainer from "./ItemQuantitySelectorContainer";
import styles from "./ItemDetail.module.css"

const ItemDetail = ({item}) => {

    if(!item) {
        return null;
    }

    return (
        <div className={`d-flex flex-column flex-md-row align-items-center justify-content-around justify-content-around  rounded ${styles['card-detail']}`}>
            <img src={`../imgPublic/${item.imageId}.jpg`} className={`img-fluid ${styles['img-detail']}`} />
            <div>
            <h4>{item.nombre}</h4>
            <p>Categoria del Producto: {item.categoria}</p>
            <p>Precio: AR$ {item.precio}</p>
            <ItemQuantitySelectorContainer item={item}/>
            </div>
        </div>
    )
}

export default ItemDetail


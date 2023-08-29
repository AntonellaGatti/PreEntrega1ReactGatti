// Contenedor de Presentacion 
import styles from "./ItemList.module.css"


const ItemList = ({ item }) => {

    return (
        <div className="container mt-5">
            <h1 className="display-3">Inicio</h1>
            <h2>Lista de Productos</h2>

            <ul className={`list-group`}>
                {item.map((item) => (
                    <li key={item.id} className={`list-group-item rounded ${styles['custom-card']}`}>
                        <h4>{item.nombre}</h4>
                        <p>Categoria del Producto: {item.categoria}</p>
                        <p>Precio: AR$ {item.precio}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;
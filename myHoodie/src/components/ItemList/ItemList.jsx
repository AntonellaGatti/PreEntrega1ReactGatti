// Contenedor de Presentacion 
import styles from "./ItemList.module.css"
import { Link } from "react-router-dom";


const ItemList = ({ item }) => {

    return (
        <div className="container-fluid ">
            <h1 className="display text-center">Inicio</h1>
            <h2 className="text-center">Lista de Productos</h2>

            <ul className={`row ${styles['custom-list']}`}>
                {item.map((item) => (
                    <li key={item.id} className={`list-group-item col-md-2 mb-4 rounded ${styles['custom-card']}`}>
                        <Link to={`/item/${item.id}`}>
                            {/* <img src={`../../img/${item.id}.jpg`}  className="img-fluid" /> */}
                            <h4>{item.nombre}</h4>
                            <p>Categoria del Producto: {item.categoria}</p>
                            <p>Precio: AR$ {item.precio}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;


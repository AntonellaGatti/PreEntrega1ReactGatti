// Contenedor de Presentacion 

const ItemQuantitySelector = ({count, Incrementar, Reducir}) => {
    return (
        <div className="mt-5">
            <label className="label">Cantidad:</label>
            <div >
                <div className="row align-items-center flex-column flex-sm-row">
                    <div className="col-auto m-1">
                        <button type="button" className="btn btn-light" onClick={Reducir}>
                            -
                        </button>
                    </div>
                    <div className="col m-1">
                        <input
                            className="text-center rounded p-1"
                            type="number"
                            value={count}
                            readOnly
                        />
                    </div>
                    <div className="col-auto m-1">
                        <button type="button" className="btn btn-light" onClick={Incrementar}>
                            +
                        </button>
                    </div>
                </div>
                <button type="button" className="btn btn-light mt-5 px-5">Agregar Item al Carrito</button>
                
            </div>
        </div>
    )



}

export default ItemQuantitySelector; 
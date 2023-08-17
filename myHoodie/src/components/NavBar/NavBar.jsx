import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary transparent-bg" data-bs-theme="dark">
            <div className="container-fluid">
                {/* MARCA  */}
                <a className="navbar-brand" href="#">My Hoodie</a>

                {/* ITEM LIST CONTAINER */}
                <ul className="navbar-nav">
                    <li className="nav-item h5">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item h5">
                        <a className="nav-link" href="#">Hoodies Lisos</a>
                    </li>
                    <li className="nav-item h5">
                        <a className="nav-link" href="#">Hoodies Estampados</a>
                    </li>
                    <li className="nav-item h5">
                        <a className="nav-link" href="#">Camperas</a>
                    </li>
                </ul>

            
                <form class="d-flex" role="search">
                    <input class="form-control me-4" type="search" placeholder="..." aria-label="Search"/>
                        <button class="btn btn-outline-secondary" type="submit">Buscar</button>
                </form>

                {/* CARTWIDGET */}
                <CartWidget />
            </div>

        </nav>

    )

}


export default NavBar;
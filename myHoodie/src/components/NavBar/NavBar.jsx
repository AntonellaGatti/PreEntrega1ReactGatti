import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget";



const NavBar = () => {
    return (
        <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary transparent-bg" data-bs-theme="dark">
            <div className="container-fluid">
                {/* MARCA  */}
                <Link to="/" className="navbar-brand">My Hoodie</Link>

                {/* ITEM LIST CONTAINER */}
                <ul className="navbar-nav">
                    {/* <li className="nav-item h5">
                        <NavLink to="/" className="nav-link">Inicio</NavLink>
                    </li> */}
                    <li className="nav-item h5">
                        <NavLink to="/categoria/hoodies" className="nav-link">Hoodies</NavLink>
                    </li>
                    <li className="nav-item h5">
                        <NavLink to="/categoria/remeras" className="nav-link">Remeras</NavLink>
                    </li>
                    <li className="nav-item h5">
                        <NavLink to="/categoria/camperas" className="nav-link">Camperas</NavLink>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <input class="form-control me-4" type="search" placeholder="..." aria-label="Search" />
                    <button class="btn btn-outline-secondary" type="submit">Buscar</button>
                </form>

                {/* CARTWIDGET */}
                <NavLink to="/cart" className="nav-link">
                    <CartWidget />
                </NavLink>

            </div>

        </nav>

    )

}


export default NavBar;
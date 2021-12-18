import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="nav">
                <div className="nav-container">
                    <h1 className="nav-logo">POKEMON APP</h1>

                    <label htmlFor="menu" className="nav-label">
                        <img src="/assets/menu.svg" alt="menu" className="nav-img" />
                    </label>
                    <input type="checkbox" id="menu" className="nav-input" />

                    <div className="nav-menu">
                        <Link to="/" className="nav-item">Inicio</Link>
                        <NavLink to="/tienda" className="nav-item">Tienda</NavLink>
                        <NavLink to="/contacto" className="nav-item">Contacto</NavLink>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;
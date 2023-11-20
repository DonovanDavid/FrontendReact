import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css'; // Asegúrate de tener la ruta correcta al archivo CSS

const Navbar = () => {
    return (
        <nav className="nav">
            <div className='navbar-container'>
                <ul className='nav-menu '>
                    <li className="nav-item">
                        <Link className='nav-links' to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-links' to="/crud">Crud</Link>
                    </li>
                    <li className="nav-item">
                        <Link className='nav-links' to="/Home">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


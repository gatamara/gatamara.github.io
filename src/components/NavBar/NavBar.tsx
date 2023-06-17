import { useState } from "react";
import "./NavBar.css"


export const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
    return (
        <nav className='navbar'>
            <div className="hamburguesa" onClick={toggleMenu}>
                <div className="linea">
                </div>
                <div className="linea"></div>
                <div className="linea"></div>
            </div>
            <ul className="navbar-lista">
                <li><a href="#">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    )
}

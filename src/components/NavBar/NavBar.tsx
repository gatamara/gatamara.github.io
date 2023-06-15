import "./NavBar.css"

export const NavBar = () => {
    return (
        <nav className='navbar'>
            <ul className="navbar">
                <li><a href="#">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
        </nav>
    )
}

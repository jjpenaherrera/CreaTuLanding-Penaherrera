import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'
import { IoLogoGitlab } from "react-icons/io5";


function Navbar() {
    return (
        <>
            <header>
                <nav className="nav-bar">
                    <IoLogoGitlab />
                    <ul className='nav-bar-items'>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                    </ul>
                    <CartWidget />
                </nav>
            </header>
        </>
    );
};

export default Navbar

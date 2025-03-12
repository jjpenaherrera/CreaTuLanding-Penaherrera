import './Navbar.css'

function Navbar() {
    return (
        <>
            <header>
                <nav className="nav-bar">
                    <p>Logo</p>
                    <ul className='nav-bar-items'>
                        <li><a href="#home">Inicio</a></li>
                        <li><a href="#about">Productos</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                    <p>Carrito (1)</p>
                </nav>
            </header>
        </>
    );
};

export default Navbar

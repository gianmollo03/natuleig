
function NavBar(){
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-group">
                    <img src="" alt="Logo Natuleig" />
                    <p>Natuleig</p>
                </div>
                <div className="navbar-group"> 
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="">Informacion</a>
                        </li>
                        <li className="navbar-item">
                            <a href="">Productos</a>
                        </li>
                        <li className="navbar-item">
                            <a href="">
                            Consultar turno</a> 
                        </li>
                    </ul>
                </div>
                <div className="navbar-group">
                    <p>Cosmetología</p>
                </div>
               
            </nav>
        </header>
    )
}
export default NavBar;
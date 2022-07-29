import React from 'react'
import CartWidget from './CartWidget';
function Footer(){
    return (
        <>
        <footer className="container-fluid">
            <div>
                <img src="" alt="Logo Natuleig" />
            </div>
            <div>
                <img src="" alt="Facebook" />
                <img src="" alt="Instagram" />
            </div>
            <div>
                <p>Todos los derechos reservados</p>
            </div>
            <CartWidget type="footer"/>
        </footer>
        </>
    )
}
export default Footer;
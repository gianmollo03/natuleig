import React from 'react'
import CartWidget from './CartWidget';
import Logo from '../images/facial.png'
import { NavLink } from 'react-router-dom';
import { HStack,Spacer,Link } from '@chakra-ui/react';
import ShoppingCart from '../images/shopping-cart.png'
function NavBar(){
    return (
        <div className="NavBarContainer" >
            <HStack className='NavbarLogo'>
            <NavLink to="/">
                <img src={Logo} alt="Natuleig" width="40px" height="40px"/>
            </NavLink>
            </HStack>
            <HStack className='NavbarItems'>
           
                  <NavLink className="LinksNavbarContainer" to="categoria/limpiador">
                    <Link className='LinksNavbar'>Limpiadores</Link>
                    </NavLink>
                
           
                    <NavLink className="LinksNavbarContainer" to="categoria/exfoliantes">
                    <Link className='LinksNavbar'>Exfoliantes</Link>
                    </NavLink>
            
            </HStack>
            <HStack className='turnosContainer'>
                <NavLink className="LinksNavbarContainer" to="consultas/consultar_turno">
                    <Link className='LinksNavbar'>Consultar turno</Link>
                </NavLink>
            </HStack>
            <HStack>
                <NavLink className="CarritoIconContainer" to="carrito">
                    <Link className='CarritoIcon'>
                        <img src={ShoppingCart} alt="Carrito de compras" width="40px" height="40px"/>
                    </Link>
                </NavLink>
            </HStack>
        </div>

    )
}
export default NavBar;
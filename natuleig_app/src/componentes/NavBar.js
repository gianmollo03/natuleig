import React from 'react'
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { HStack,Spacer,Link } from '@chakra-ui/react';
function NavBar(){
    return (
        <HStack>
            <NavLink to="/">
                <img src="facial.png" alt="Natuleig" width="40px" height="40px"/>
            </NavLink>
            <Spacer>    
            </Spacer>
            <HStack>
                <NavLink className="LinksNavbarContainer" to="category/limpiador">
                    <Link className='LinksNavbar'>Limpiadores</Link>
                </NavLink>
                <NavLink className="LinksNavbarContainer" to="category/exfoliantes">
                    <Link className='LinksNavbar'>Exfoliantes</Link>
                </NavLink>
                <NavLink className="LinksNavbarContainer" to="consultas/consultar_turno">
                    <Link className='LinksNavbar'>Consultar turno</Link>
                </NavLink>
            </HStack>
           
        </HStack>
    )
}
export default NavBar;
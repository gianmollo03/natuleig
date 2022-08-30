import React from "react";
import { Link } from "@chakra-ui/react";
import { VStack, Button,Text,Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export const Item=({producto})=>{
    
    return(
        <VStack boxShadow='lg' p='6' rounded='md' bg='white' m='15px' minWidth='275px' className="itemContainer">
            <Image className="imagenItem" src={producto.image} alt={producto.nombre} w='200px' height="200px"  />
            <Text className="nombreItem">{producto.nombre}</Text>
            <Text className="precioItem">{producto.precio}$</Text>
            <Button colorScheme="pink" size='xs'>
                <NavLink to={`producto/${producto.id}`}>
                <Link className="linkDetalle">Ver Detalle</Link>
                </NavLink>
                
            </Button>
        </VStack>
        
    )
}
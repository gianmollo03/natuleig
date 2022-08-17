import React from "react";
import { Link } from "@chakra-ui/react";
import { VStack, Button,Text,Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export const Item=({producto})=>{
    console.log(producto)
    return(
        <VStack boxShadow='lg' p='6' rounded='md' bg='white' m='15px' minWidth='275px'>
            <Image src={producto.image} alt={producto.nombre} w='200px'  />
            <Text>{producto.nombre}</Text>
            <Text>{producto.precio}$</Text>
            <Button colorScheme="red" size='xs'>
                <NavLink to={`producto/${producto.id}`}></NavLink>
                <Link>Ver Detalle</Link>
            </Button>
        </VStack>
    )
}
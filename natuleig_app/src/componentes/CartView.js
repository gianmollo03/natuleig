
import { Box, Center, HStack, Image, Input, Text, VStack } from "@chakra-ui/react"
import {  useCarrito } from "../context/CartContext"
import React, { useContext } from "react"


export const CartView =()=>{
    const {carrito} = useCarrito()
    console.log(carrito)
    return(
        <Center>
            <VStack>
                {carrito.map(prod=>{
                    <HStack key={prod.id} boxShadow='lg' p='6' rounded='md' spacing={10} bg='white'>
                        <Image src={prod.image} w='100px'></Image>
                        <Text as='b'>{prod.nombre}</Text>
                        <Text as='b'>{prod.precio}</Text>
                        <Text as='b'>{prod.cantidad}</Text>
                    </HStack>
                })}
            </VStack>
        </Center>
    )

}
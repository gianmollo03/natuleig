
import { Box, Center, HStack, Image, Input, Text, VStack } from "@chakra-ui/react"
import {  useCarrito } from "../context/CartContext"
import React, { useContext } from "react"
import { ProductoCarrito } from "./productosCarrito"


export const CartView =()=>{
    const {carrito} = useCarrito()
    console.log(carrito)
    return(
        <Center>
            <VStack>
                {carrito.map(prod=>{
                    {console.log(prod)}
                    <ProductoCarrito id={prod.id} nombre={prod.nombre} image={prod.image} cantidad={prod.cantidad}></ProductoCarrito>
                })}
            </VStack>
        </Center>
    )

}
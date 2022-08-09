import React from "react";
import { VStack, Button,Text,Image } from "@chakra-ui/react";
import { Item } from "./Item";
export const ItemList =({listaProductos})=>{
    return(
        <>
            {listaProductos.map(producto => <Item key={producto.id} producto = {producto}/>)}  
        </>
    )
}
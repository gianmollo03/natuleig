import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CustomFetch } from "../utiles/customFetch";
import { ItemDetail } from "./ItemDetail";
import {productos} from "../utiles/productos";
import { Text } from "@chakra-ui/react";

export const ItemDetailContainer=()=>{
    const [listaProductos,setListaProductos]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setLoading(true)
        CustomFetch(productos)
        .then(res=>{
            setLoading(false)
            setListaProductos(res.find(item=>item.id===1))
            }
            )
        
    },[])
    console.log(listaProductos)
    return(
        <>
            {!loading
            ?
            <ItemDetail listaProducto = {listaProductos}></ItemDetail>
        :
        <Text>Cargando...</Text>}
        </>
    )

}
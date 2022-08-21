import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CustomFetch } from "../utiles/customFetch";
import { ItemDetail } from "./ItemDetail";
import {productos} from "../utiles/productos";
import { list, Text } from "@chakra-ui/react";
import { Route, useParams } from "react-router-dom";

export const ItemDetailContainer=()=>{
    const [listaProducto,setListaProducto]=useState({})
    const [loading,setLoading]=useState(true)
    const {id} = useParams()
 
    useEffect(()=>{
        setLoading(false)
        CustomFetch(productos)
        .then(res=>{
            setLoading(false)
            setListaProducto(res.find(item=>item.id===parseInt(id)))
            }
            )
        
    },)
    
    return(
        <>
            {!loading
            ?
            <ItemDetail listaProducto = {listaProducto}>
                
            </ItemDetail>
            
        :
        
        <Text>Cargando...</Text>}
        </>
    )

}
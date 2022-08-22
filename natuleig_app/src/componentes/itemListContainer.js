import React from "react";
import ItemCount from "./ItemCount";
import { productos } from "../utiles/productos";
import { CustomFetch } from "../utiles/customFetch";
import { useEffect,useState } from "react";
import { ItemList } from "./ItemList";
import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = (greeting)=>{
    const  [listaProductos,setListaProductos]=useState([])
    const [loading,setLoading]=useState(true)
    const {categoria} = useParams()
    useEffect(()=>{
        setLoading(true)
        CustomFetch(productos)
            .then(res => {
                if(categoria){
                    setLoading(false)
                    setListaProductos(res.filter(prod => prod.categoria === categoria))
                }else{
                setLoading(false)
                setListaProductos(res)
                }
                })
    },[categoria])
    

    return(
        <div id="listaDeItems">
            {!loading
            ?
            <ItemList listaProductos = {listaProductos}/>
            :
            <Text>Cargando...</Text>}
            {greeting.greeting}
            {/* <ItemCount stock={10} initial={0} onAdd=""/> */}
        </div>
        
    )
}
export default ItemListContainer
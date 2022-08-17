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
    const {categorys} = useParams()
    useEffect(()=>{
        setLoading(true)
        CustomFetch(productos)
            .then(res => {
                if(categorys){
                    setLoading(false)
                    setListaProductos(res.filter(prod => prod.categorys === categorys))
                }else{
                setLoading(false)
                setListaProductos(res)
                }
                })
    },[categorys])
    

    return(
        <div id="landing-message">
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
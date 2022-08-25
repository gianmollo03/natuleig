import React from "react"
import ItemCount from "./ItemCount"

export const ItemDetail=({listaProducto})=>{

    const onAdd = (contador) =>{
        
        listaProducto.contador = contador
        
        console.log(listaProducto)
    }
    return(
        <>
           <div className="detailProductContainer">
            <div className="detailProductChild">
            <h2>Detalles del producto ID: {listaProducto.id}</h2>
            <div className="detailProductName">
                {listaProducto.nombre}
            </div>
            <div className="detailProductDesc">
                {listaProducto.descripcion}
            </div>
            <div>
                <ItemCount initial={1} stock={listaProducto.stock} onAdd={onAdd}></ItemCount>
            </div>
            </div>

           </div>
            
        </>
    )
}
import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"

export const ItemDetail=({listaProducto})=>{
    console.log(listaProducto)
    return(
        <>
           <div className="detailProductContainer">
            <h2>Detalles del producto ID: {listaProducto.id}</h2>
            <div className="detailProductName">
                {listaProducto.nombre}
            </div>
            <div className="detailProductDesc">
                {listaProducto.descripcion}
            </div>
           </div>
            
        </>
    )
}
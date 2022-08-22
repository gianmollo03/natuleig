import React from "react"

export const ItemDetail=({listaProducto})=>{
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
                <button className="botonAgregarCarrito">Agregar al carrito</button>
            </div>
            </div>

           </div>
            
        </>
    )
}
import React from "react";
import { useState } from "react";

const ItemCount =()=>{



    const resultado = useState(0)
    let contador = resultado[0]
    const setContador=resultado[1]



    const aumentarContador=()=>{
        console.log("Aumentar contador")
        setContador(contador+1)
    }


    const disminuirContador=()=>{
        console.log("Disminuir contador")
        setContador(contador-1)
    }
    
    return (
        <div className="grupoBotonesCarritoContainer">
            <div className="botonesContadorContainer">
            <button onClick={disminuirContador}>-1</button>
            <p>{contador}</p>
            <button onClick={aumentarContador}>+1</button>
            </div>
            <div className="botonCarritoContainer">
                <button id="botonAñadirCarrito">Añadir al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount
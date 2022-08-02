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
        <div className="grupoBotonContador">
            <button onClick={disminuirContador}>-1</button>
            <p>{contador}</p>
            <button onClick={aumentarContador}>+1</button>
        </div>
    )
}
export default ItemCount
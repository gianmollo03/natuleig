import React from "react";
import { useState } from "react";

const ItemCount =(props)=>{
    const stockValor = props.stock
    const [contador,setContador] = useState(props.initial)



    const aumentarContador=()=>{
        console.log("Aumentar contador")
        setContador(contador+1)
        if(contador>=stockValor){
            setContador(contador)
        }
    }


    const disminuirContador=()=>{
        console.log("Disminuir contador")
        setContador(contador-1)
        if(contador<=0){
            setContador(contador)
        }
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
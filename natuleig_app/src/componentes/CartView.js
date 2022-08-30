
import { Box, Input, Text } from "@chakra-ui/react"
import {  useCarrito } from "../context/CartContext"



export const CartView =()=>{
    const {carrito,eliminarItemCarrito,limpiarCarrito,obtenerPrecioTotal} = useCarrito()
    return(
        <>
        <div>
            <h1>Carrito</h1>
            <h2>Productos:</h2>
            )
           { carrito.map(prod=>{
                    <div>
                    <p>{prod.nombre}</p>
                    <p>{prod.cantidad}</p>
                    <p>
                        {prod.precio}
                    </p>
                    <img src={prod.image} alt="" />
                    
                    </div>})}
        </div>
        </>
    )

}
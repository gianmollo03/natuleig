
import {  useCarrito } from "../context/CartContext"




export const CartView =()=>{
    const {carrito,estaEnCarrito,eliminarItemCarrito,limpiarCarrito,obtenerCantidad,obtenerPrecioTotal} = useCarrito()


}
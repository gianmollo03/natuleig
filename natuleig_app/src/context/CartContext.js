import { createContext, useState } from "react";
export const CartContext = createContext()

const {Provider} = CartContext;

const MyProvider = ({children}) =>{
    
    const [carrito,setCarrito] = useState([])

    const estaEnCarrito =(id)=>{
        return carrito.some(prod=> prod.id===id)
    }
    const añadirCarrito = (producto,cantidad)=>{
        if(estaEnCarrito(producto.id)){

        }
    }
    const quitarCarrito = (id)=>{
        return setCarrito(carrito.filter(prod=>prod.id!==id))
    }
    const limpiarCarrito = () =>{
        return setCarrito([])
    }
    const conocerCantidad = () =>{
        return carrito.reduce((acumulador,prod)=>acumulador += prod.cantidad,0)
    }
    const conocerTotal = () =>{
        return carrito.reduce((acumulador,prod)=> acumulador+= prod.cantidad*prod.precio,0 )
    }
    return <Provider value={{carrito,estaEnCarrito,añadirCarrito,quitarCarrito,limpiarCarrito,conocerCantidad,conocerTotal}}>
        {children}
    </Provider>

}

export default MyProvider
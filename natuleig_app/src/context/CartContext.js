import { createContext, useState,useContext } from "react";
import { Item } from "../componentes/Item";
export const CartContext = createContext([])

// const {Provider} = CartContext;

// const MyProvider = ({children}) =>{
    
//     const [carrito,setCarrito] = useState([])

//     const estaEnCarrito =(id)=>{
//         return carrito.some(prod=> prod.id===id)
//     }
//     const añadirCarrito = (producto,cantidad)=>{
//         if(estaEnCarrito(producto.id)){

//         }
//     }
//     const quitarCarrito = (id)=>{
//         return setCarrito(carrito.filter(prod=>prod.id!==id))
//     }
//     const limpiarCarrito = () =>{
//         return setCarrito([])
//     }
//     const conocerCantidad = () =>{
//         return carrito.reduce((acumulador,prod)=>acumulador += prod.cantidad,0)
//     }
//     const conocerTotal = () =>{
//         return carrito.reduce((acumulador,prod)=> acumulador+= prod.cantidad*prod.precio,0 )
//     }
//     return <Provider value={{carrito,estaEnCarrito,añadirCarrito,quitarCarrito,limpiarCarrito,conocerCantidad,conocerTotal}}>
//         {children}
//     </Provider>

// }


export function CartContextProvider({children}){
    
    const [carrito,setCarrito] = useState([])
    
    const estaEnCarrito = (id) =>{
        carrito.find(prod=>prod.id === id)
    }

    const añadirItemCarrito = (producto,cantidad) =>{
        if(estaEnCarrito(producto.id)){
            const nuevoCarrito = carrito.map(prod=>{
                if(prod.id===producto.id){
                    const nuevaCantidad = prod.cantidad += cantidad
                    return {...prod,cantidad:nuevaCantidad}
                }
                else{
                    return prod
                }
            })
            setCarrito(nuevoCarrito)
            console.log(carrito)
        }
        else{
            const nuevoProducto = {...producto,cantidad:cantidad}
            setCarrito([...carrito,nuevoProducto])
            console.log(carrito)
        }
    }

    const eliminarItemCarrito = (id) => setCarrito(carrito.filter(prod=> prod.id !== id))

    const limpiarCarrito = () => setCarrito([])

    const obtenerCantidad = () => carrito.reduce((acumulador,prod)=> acumulador+=prod.cantidad,0)

    const obtenerPrecioTotal = () => carrito.reduce((acumulador,prod)=> acumulador+=(prod.precio*prod.cantidad))

    return(
        <CartContext.Provider value={{
            carrito,
            estaEnCarrito,
            añadirItemCarrito,
            eliminarItemCarrito,
            limpiarCarrito,
            obtenerCantidad,
            obtenerPrecioTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

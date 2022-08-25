import { createContext,useState,useContext } from "react";
const CartContext = createContext([])
export const useCartContext=()=>useContext(CartContext)

export function CartContextProvider ({ children }) {
        const [cartList, setCartList] = useState([])
        
        const   isInCart = (id) => cartList.find(prod => prod.id == id)

        const addToCart=(item,cantidad)=>{
            if(isInCart(item.id)){  
                const newCart  = cartList.map(prod=>{
                    if(prod.id === item.id){
                        const newCantidad = prod.cantidad + cantidad;
                        return {...prod,cantidad: newCantidad}  } 
                    else{
                        return prod
                    }
                    })
                    setCartList(newCart)
                    }
            else{
                const newProduct = {...item,cantidad:cantidad}
                setCartList([...cartList,newProduct])
            }

            }
        const removeProduct = (id) => setCartList(cartList.filter(prod=>prod.id != id ))
        const cleanCart = () => setCartList([])
        const totalPrecio = () =>{
            return cartList.reduce ((acc,product)=> acc +=(product.precio*product.cantidad),0)     

        }
        const totalCantidad = () =>{
            return cartList.reduce((add,product) => acc += product.cantidad,0)
        }
        return(
            <CartContext.Provider value={{
                addToCart,
                removeProduct,
                cleanCart,
                totalPrecio,
                totalCantidad
            }}>
                { children }
            </CartContext.Provider>
        
        
    )
        }
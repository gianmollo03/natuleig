import { createContext,useState,useContext } from "react";
const CartContext = createContext([])
export const useCartContext=()=>useContext(CartContext)

export function CartContextProvider ({ children }) {
        const [cartList, setCartList] = useState([])
        
        const   isInCart = (id) => cartList.find(prod => prod.id == id)

        const addToCart=(item,quantity)=>{
            if(isInCart(item.id)){  
                const newCart = cartList.map(prod=>{
                    const newQuantity = prod.quantity + quantity;
                    return {...prod,quantity: newQuantity} 
                })
            }
        }
    return(
        <CartContext.Provider value = {{

        }}>
            { children }
            </CartContext.Provider>
    )
}
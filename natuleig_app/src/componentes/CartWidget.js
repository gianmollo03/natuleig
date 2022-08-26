import ShoppingCart from "@mui/icons-material/ShoppingCart"
import CartIcon from "@mui/icons-material/ShoppingCart"
import { Badge } from "@mui/material"
// import { useContext } from "react"
// import { CartContext } from "../context/CartContext"


export const CartWidget = () =>{
    // const {conocerCantidad} = useContext(CartContext)
    
    return(
        <div>
            <ShoppingCart></ShoppingCart>
            {/* <p>{conocerCantidad()}</p> */}
        </div>
    )
}
export default CartWidget
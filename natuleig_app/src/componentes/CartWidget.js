
import { IconButton } from "@chakra-ui/react";
import { CartContext, useCarrito } from "../context/CartContext";
import ShoppingCart from '../images/shopping-cart.png'
import {FaShoppingCart} from 'react-icons/fa'
 


const CartWidget = () =>{
    const {obtenerCantidad} = useCarrito()
    return(
        <div className="CartWidget">
            <FaShoppingCart></FaShoppingCart>           
            <p>{obtenerCantidad()}</p>
        </div>
    )
}
export default CartWidget 
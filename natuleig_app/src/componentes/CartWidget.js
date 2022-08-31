
import { useCarrito } from "../context/CartContext";
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
import { Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { CartContext, useCarrito } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    const {obtenerCantidad} = useCarrito()
    return(
        <div className="CartWidget">
            
            <p>{obtenerCantidad()}</p>
        </div>
    )
}
export default CartWidget 
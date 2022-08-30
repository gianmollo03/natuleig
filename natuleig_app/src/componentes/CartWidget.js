import { Icon } from "@chakra-ui/react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext, useCarrito } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () =>{
    const {obtenerCantidad} = useCarrito()
    return(
        <div className="CartWidget">
            <Icon as={ShoppingCartIcon}></Icon> 
            <p>{obtenerCantidad()}</p>
        </div>
    )
}
export default CartWidget 
import { Icon } from "@chakra-ui/react";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext, useCarrito } from "../context/CartContext";

const CartWidget = () =>{
    const {obtenerCantidad} = useCarrito()
    return(
        <div className="CartWidget">
            <Icon as={ShoppingCart}></Icon>
            <p>{obtenerCantidad()}</p>
        </div>
    )
}
export default CartWidget 
// import { Icon } from "@chakra-ui/react";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{
    const {obtenerCantidad} = useContext(CartContext)
    return(
        <div className="CartWidget">
            {/* <Icon as={ShoppingCartIcon}></Icon> */}
            <p>{obtenerCantidad()}</p>
        </div>
    )
}
export default CartWidget 
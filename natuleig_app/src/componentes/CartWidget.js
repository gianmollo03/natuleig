import React from "react";
import { DiBower } from "react-icons/di";


const CartWidget = (Logo)=>{
    
        if(Logo.type =='header'){
            return(
                <>
                <a href="">
                <img src="shopping-cart.png" alt="Carrito de compras" width={40} height={40} />
                </a>

                </>
                
            )
        }
        else if(Logo.type=='footer'){
            return(
                <DiBower/>
            )
        }
    
}
export default CartWidget
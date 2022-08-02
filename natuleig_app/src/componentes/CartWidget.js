import React from "react";
import { DiBower } from "react-icons/di";
const CartWidget = (Logo)=>{
    
        if(Logo.type =='header'){
            return(
                <DiBower/>
            )
        }
        else if(Logo.type=='footer'){
            return(
                <DiBower/>
            )
        }
    
}
export default CartWidget
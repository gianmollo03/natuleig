import React from "react";
const CartWidget = (Logo)=>{
    
        if(Logo.type =='header'){
            return(
                <img src="/logo192.png" alt="Logo" className="logo-header" />
            )
        }
        else if(Logo.type=='footer'){
            return(
                <img src="/logo192.png" alt="Logo" className="logo-footer" />
            )
        }
    
}
export default CartWidget
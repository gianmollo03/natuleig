import React from "react";
import ItemCount from "./ItemCount";
const ItemListContainer = (greeting)=>{
    
    return(
        <div id="landing-message">
            {greeting.greeting}
            <ItemCount/>
        </div>
        
    )
}
export default ItemListContainer
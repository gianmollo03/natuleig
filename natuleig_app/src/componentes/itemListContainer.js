import React from "react";
import ItemCount from "./ItemCount";
const ItemListContainer = (greeting)=>{
    
    return(
        <div id="landing-message">
            {greeting.greeting}
            <ItemCount stock="40" initial="0" onAdd=""/>
        </div>
        
    )
}
export default ItemListContainer
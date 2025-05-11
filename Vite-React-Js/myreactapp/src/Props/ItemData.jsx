import React from "react";
import ItemList from "./ItemList";
function ItemData(){
    const color=['Red','Blue','yellow','white'];
    return(
        <>
        <h1>This is Parent</h1>
        <ItemList props={color}/>
        </>
    )
}
export default ItemData;
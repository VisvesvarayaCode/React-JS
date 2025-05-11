import React from "react";
function ItemList({props}){
    return (
        <>
        <h1>This is Child</h1>
          <ul>
                {props.map((item, index)=>(
                     <li key={index}>{item}</li>
                ))}
            
          </ul>
          </>
                
                
    )
}
export default ItemList;
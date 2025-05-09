import React from "react";

function Child({name,surname}){
    return(
        <>
        <h1>This is Child</h1>
        <p>My Name is : {name}{surname}</p>
        </>
    )
}
export default Child;
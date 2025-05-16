import React from "react";
import Child from "./child";
function Parent({name}){

    return(
        <>
        <Child  name={name} />
        </>
    )
}
export default Parent;
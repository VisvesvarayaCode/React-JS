import React, { useRef } from "react";
function ButtonToggle(){
    const myref=useRef(null);
    const clickButton=()=>{
        if(myref.current){
            myref.current.style.color='blue';
        }
    }
    return(
        <div>
            <button ref={myref}>
                Click me
            </button>
            <button onClick={clickButton}>Hide Button</button>
        </div>
    )
}
export default ButtonToggle;
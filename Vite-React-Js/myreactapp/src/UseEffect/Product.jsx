// https://fakestoreapi.com/products
import React, { useState, useEffect } from "react";
function TextChanger(){
    const [text, setText]=useState("Hi this is nitin");
    useEffect(()=>{
       const timer=setTimeout(()=>{
        setText("Yah nitin");
       }, 3000)

    //    return ()=>clearTimeout(timer)
    }, [])

    // return ()=>clearTimeout(timer)
    return (
        <div>
            <h1 style={{color:"black"}}>{text}</h1>
        </div>
    )
}
export default  TextChanger;


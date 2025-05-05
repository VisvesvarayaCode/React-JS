import React, { createElement } from 'react';
import ReactDOM, {createRoot} from "react-dom/client";
let a=React.createElement("div",null, createElement("h1",{id:"text", style:{color:"green", fontSize:"60px"}}, "welcome to mentore solution"));
let b=React.createElement("div",null, createElement("h2",{id:"text", style:{color:"red", fontSize:"60px"}}, "welcome to react js"));
let demo=ReactDOM.createRoot(document.getElementById("root"));
let demo1=ReactDOM.createRoot(document.getElementById("container"));
demo.render(a);
demo1.render(b);


{/* <h1 id="hello" style="color: "red">Hello world</h1>
    
    <div> 
       <h1> Welcome to mentore solution</h1>
    </div>
    
    
    */}
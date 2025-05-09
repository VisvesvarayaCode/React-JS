// import ReactDOM, { createRoot } from 'react-dom/client'
// import React from 'react';

// const { createElement } = React;
// // let demo=React.createElement(TagName,{Attribute},value)
// let f = createElement("h1", { style: { color: "green", backgroundColor: "pink" } }, "Registration Form", createElement("br"), createElement("div", { id: "box" },
//   createElement("form", { action: "" }, createElement("label", { htmlFor: "name" }, "Name:", createElement("input", { type: "name", id: "name", placeholder: "Enter Your Name: " })),
//     createElement("br"), createElement("label", { htmlFor: "html" }, "Email: ", createElement("input", { type: "email", id: "email", placeholder: "Enter your email: " })), createElement("br"), createElement("label", { htmlFor: "password" }, "password: ", createElement("input", { type: "password", id: "password", placeholder: "Enter your password: " }))), createElement("br"), createElement("button", null, "submit")));

// // createRoot(document.getElementById('root')).render();
// ReactDOM.createRoot(document.getElementById("root")).render(f);

//! Function Base Component

/*
import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App";

function demo(){
  return (
   <App/> 
  )
  
}

ReactDOM.createRoot(document.getElementById("root")).render(demo());
*/

//! Class Base Component

import React from "react";
import ReactDOM from "react-dom/client";
import Parent from "./Props/Parent";
// import Child from "./Props/child";
// import ClassBaseComponent from "./ClassBaseComponent";
// import MainSection from "./MainSection";

function Web() {
  return(
    <>
    {/* <ClassBaseComponent/>
    <MainSection/> */}
    {/* <Child/> */}
    <Parent/>
    </>
  )
  
}

ReactDOM.createRoot(document.getElementById("root")).render(Web())
import React, { createElement } from 'react';
import ReactDOM, {createRoot} from "react-dom/client";
let a=React.createElement("div",null, createElement("h1",{style:{color:"red"}},"hello world!"));
ReactDOM.createRoot(document.getElementById("root")).render(a);
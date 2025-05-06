import ReactDOM, { createRoot } from 'react-dom/client'

import React from 'react';
const { createElement } = React;
let f = createElement("h1", { style: { color: "green", backgroundColor: "pink" } }, "Registration Form", createElement("br"), createElement("div", { id: "box" },
  createElement("form", { action: "" }, createElement("label", { htmlFor: "name" }, "Name", createElement("input", { type: "name", id: "name", placeholder: "Enter Your Name: " })),
    createElement("br"), createElement("label", { htmlFor: "html" }, "Email: ", createElement("input", { type: "email", id: "email", placeholder: "Enter your email: " })), createElement("br"), createElement("label", { htmlFor: "password" }, "password: ", createElement("input", { type: "password", id: "password", placeholder: "Enter your password: " }))), createElement("br"), createElement("button", null, "submit")));

createRoot(document.getElementById('root')).render();
ReactDOM.createRoot(document.getElementById("root")).render(f);
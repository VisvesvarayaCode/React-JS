import React, {useState} from "react";
function DarkLightMode(){
    const [darkMode, setDarkMode] = useState(false);

    const changeMode=()=>{
        setDarkMode(!darkMode);
    }

    const pageStyle={
        backgroundColor:darkMode?"#000000":"#ffffff",
        color:darkMode?"F564A9":"#000000",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",

    }

    return(
        <div style={pageStyle}>
            <h1>{darkMode?"Dark Mode🌙":"Light Mode ☀️"}</h1>
            <button onClick={changeMode}>Switch to {darkMode?"Light":"Dark"}Mode</button>
        </div>
    )
}
export default DarkLightMode;
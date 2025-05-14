import React from "react";
import "./style.css"
import FunctionBaseComponent from "./Component/FunctionBaseComponent";
import ProductData from "./Props/ProductData";
import ItemData from "./Props/ItemData";
import Parent from "./Props/Parent";
import ClassBaseComponent from "./Component/ClassBaseComponent";
import Counter from "./State/Counter";
import ProductDetails from "./UseState/ProductDetails";
import FlowersList from "./UseState/FlowersList";
import Switch from "./UseEffect/Switch";
import DarkLightMode from "./UseEffect/DarkLightMode";
import TextChanger from "./UseEffect/Product";

function App() {
  return(
    <>
    {/* ------ Components ------  */}
     {/* <FunctionBaseComponent/> */}
     {/* <ClassBaseComponent/> */}

     {/* ----- Props ----- */}
     {/* <ProductData/> */}
     {/* <ItemData/> */}
     {/* <Parent/> */}

     {/* ------ States ------ */}
     {/* <Counter/> */}

     {/* UseState Hook */}
     {/* <ProductDetails/> */}
     {/* <FlowersList/> */}

     {/* ------- Use Effect --------- */}
     {/* <Switch/> */}
     {/* <DarkLightMode/> */}
     <TextChanger/>


    </>
  )
}
export default App;

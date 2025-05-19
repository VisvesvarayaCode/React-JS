import React from "react";
import "./style.css"
import ApiData from "./UseContext/ApiData";
import ContextApi from "./UseContext/ContextApi";
import Concept from "./UseRef/Concept";
import ButtonToggle from "./UseRef/ButtonToggle";
import Factorial from "./UseMemo/factorial";
import Home from "./CSS-Module/Home";
import FactorialCalculator from "./UseMemo/FactorialData";
import FibonacciCalculator from "./UseMemo/FibonacciMemo";
// import Home from "./Styled-Component/Home";
// import FunctionBaseComponent from "./Component/FunctionBaseComponent";
// import ProductData from "./Props/ProductData";
// import ItemData from "./Props/ItemData";
// import Parent from "./Props/Parent";
// import ClassBaseComponent from "./Component/ClassBaseComponent";
// import Counter from "./State/Counter";
// import ProductDetails from "./UseState/ProductDetails";
// import FlowersList from "./UseState/FlowersList";
// import Switch from "./UseEffect/Switch";
// import DarkLightMode from "./UseEffect/DarkLightMode";
// import AppFetchEffect from "./UseEffect/ApiFetchEffect";
// import Demo from "./UseContext/Demo";
// import PropsDrilling from "./UseContext/PropsDrilling";




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
     {/* <TextChanger/> */}
     {/* <AppFetchEffect/> */}
        {/* <Demo/> */}
    {/* <PropsDrilling/> */}
    {/* <ContextApi>
    <ApiData/>

    </ContextApi> */}

    {/* <Concept/> */}

    {/* <ButtonToggle/> */}

     {/* <Factorial/> */}

     {/* <Home/> */}

     {/* <Home/> */}

     <FactorialCalculator/>
     <FibonacciCalculator/>
    </>
  )
}
export default App;

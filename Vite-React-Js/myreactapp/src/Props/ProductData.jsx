import React from "react";
import ProductCard from "./ProductCard";
import Img from "../assets/birthday.jpg"
function ProductData(){
    return(
        <div>
        <h1>Featured Products</h1>
        <ProductCard 
          title="iPhone 15 Pro Max" 
          price="₹1,59,900" 
          image={Img}
        />
        <ProductCard
          title="Samsung Galaxy S24 Ultra" 
          price="₹1,39,999" 
          image="https://cdn.pixabay.com/photo/2025/05/04/17/47/dog-9578735_1280.jpg"
        />
      </div>
    )
}
export default ProductData;
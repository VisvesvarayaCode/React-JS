import React,{useState} from "react";
function ProductDetails(){
    const [product, setProduct] = useState({
        id:101,
        name:"Apple",
        price:100,
        description:"This is a apple"

})

const changeName=()=>{
    setProduct({
        id:101,
        name:"Banana",
        price:100,
        description:"This is a banana"
    })
}

return(
    <>
    <div>
        <h1>Product Details</h1>
        <p><strong>Product Id: </strong>{product.id}</p>
        <p><strong>Product Name: </strong>{product.name}</p>
        <p><strong>Product Price: </strong>{product.price}</p>
        <p><strong>Product Description: </strong>{product.description}</p>
        <button onClick={changeName}>Change Name</button>
    </div>
    </>
)
}
export default ProductDetails;
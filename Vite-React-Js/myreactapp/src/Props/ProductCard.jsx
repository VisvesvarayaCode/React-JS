import React from "react";
function ProductCard(props) {
    return (
        <>
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
                <img src={props.image} alt={props.title} width="150" />
                <h2>{props.title}</h2>
                <p>Price: {props.price}</p>
            </div>
        </>
    )
}
export default ProductCard;
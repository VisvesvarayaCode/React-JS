import React, { useState } from "react";

function FlowersList() {
    const [flowers, setFlowers] = useState([
        { id: 1, name: "Rose", price: 10, color: "red" },
        { id: 2, name: "Lily", price: 20, color: "white" },
        { id: 3, name: "Sunflower", price: 30, color: "yellow" },
        { id: 4, name: "Daisy", price: 40, color: "pink" },
        { id: 5, name: "Tulip", price: 50, color: "blue" },
    ]);

    function changeFlowerName() {
        flowers[1].name = "Lotus"; 
        setFlowers([...flowers]);  
    }

    return (
        <div>
            <h2>Flowers List</h2>
            <ul>
                {flowers.map((flower, index) => (
                    <li key={index}>
                        <h4>
                            {flower.id} - {flower.name} - {flower.price} - {flower.color}
                        </h4>
                    </li>
                ))}
            </ul>
            <button onClick={changeFlowerName}>Do Change</button>
        </div>
    );
}
export default FlowersList;

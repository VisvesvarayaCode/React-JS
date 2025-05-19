import React, { useState } from "react";

function Factorial() {
  const [number, setNumber] = useState(7); // default input
  const [result, setResult] = useState(null); // will hold the factorial result

  // Recursive factorial function
  const factorial = (n) => {
    if (n < 0) return "Not defined"; // handling negative input
    return n === 0 ? 1 : n * factorial(n - 1);
  };

  // Called only when user clicks the button
  const handleClick = () => {
    const fact = factorial(number);
    console.log("Factorial:", fact); // for debugging
    setResult(fact);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Factorial Calculator</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          const input = parseInt(e.target.value) || 0;
          setNumber(input);
          setResult(null); // Clear result when input changes
        }}
      />
      <br /><br />
      <button onClick={handleClick}>Show Answer</button>
      <br /><br />
      {result !== null && <h3> Factorial of {number} is: {result}</h3>}
    </div>
  );
}

export default Factorial;

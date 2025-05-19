import React, { useState, useMemo } from 'react';
function FactorialCalculator() {
    const [number, setNumber] = useState(5);
    const factorial = (n) => {
        console.log('Calculating factorial...');
        return n <= 0 ? 1 : n * factorial(n - 1);
    };
    const memoizedFactorial = useMemo(() => factorial(number), [number]);
    return (
<>
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseInt(e.target.value))}
        />
 Factorial: { memoizedFactorial }
 </>

 );
}
export default FactorialCalculator;

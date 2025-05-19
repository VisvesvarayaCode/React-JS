import React, { useState, useMemo } from 'react';

function FibonacciCalculator() {
    const [number, setNumber] = useState(5);

    const fibonacci = (n) => {
        console.log('Calculating fibonacci...');
        if (n <= 0) return 0;
        if (n === 1) return 1;
        return fibonacci(n - 1) + fibonacci(n - 2);
    };

    const memoizedFibonacci = useMemo(() => fibonacci(number), [number]);

    return (
        <>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
            />
            Fibonacci: {memoizedFibonacci}
        </>
    );
}

export default FibonacciCalculator;

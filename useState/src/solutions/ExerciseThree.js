import React, { useState } from "react";

export const CounterButtons = ({ prop }) => (
    <>
        <button
            data-testid="increment-button"
            onClick={() => { prop(count => count + 1); }}
        >
            Increment
        </button>
        <button
            data-testid="decrement-button"
            onClick={() => { prop(count => count - 1); }}
        >
            Decrement
        </button>
    </>
);

const ExerciseThree = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Exercise Three</h2>
            <p data-testid="count-display">Count: {count}</p>
            <CounterButtons prop={setCount} />
        </>
    );
};

export default ExerciseThree;
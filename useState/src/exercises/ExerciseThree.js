import React from "react";

export const CounterButtons = () => (
    <>
        <button data-testid="increment-button">

        </button>
        <button data-testid="decrement-button">

        </button>
    </>
);

const ExerciseThree = () => {
    return (
        <>
            <h2>Exercise Three</h2>
            <p data-testid="count-display"></p>
            <CounterButtons />
        </>
    );
};

export default ExerciseThree;
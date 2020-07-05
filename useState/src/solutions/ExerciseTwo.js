import React, { useState } from "react";

const ExerciseTwo = () => {
    const [name, setName] = useState("Aniket");

    return (
        <>
            <h2>Exercise Two</h2>
            <input
                data-testid="name-input"
                type="text"
                placeholder="Name"
                onChange={e => { setName(e.target.value); }}
                value={name}
            />
            <p data-testid="greeting">Hello {name}!</p>
        </>
    );
};

export default ExerciseTwo;
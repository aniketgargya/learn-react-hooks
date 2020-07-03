import React, { useState } from 'react';

const ExerciseOne = () => {
    const [happy, setHappy] = useState(true);

    return (
        <>
            <h2>Exercise One</h2>
            <button data-testid="happy-button" onClick={() => { setHappy(true); }}>Happy</button>
            <button data-testid="sad-button" onClick={() => { setHappy(false); }}>Sad</button>
            <p data-testid="mood-text">
                {happy ? ":)" : ":("}
            </p>
        </>
    );
};

export default ExerciseOne;
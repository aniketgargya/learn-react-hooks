import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { generateGetElementByDataAttribute } from "generate-get-element-by-data-attribute";

import ExerciseOne from "../src/exercises/ExerciseOne";

let container;
const getElementByTestId = generateGetElementByDataAttribute("testid");

const clickElement = element => {
    element.dispatchEvent(new MouseEvent("click", { bubbles: true }));
};

const setInputValue = (input, newValue) => {
    const lastValue = input.value;
    input.value = newValue;
    const event = new Event("input", { bubbles: true });
    const tracker = input._valueTracker;
    if (tracker) tracker.setValue(lastValue);
    input.dispatchEvent(event);
};

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe("exercise one", () => {
    it("happy button has text \"Happy\"", () => {
        act(() => {
            ReactDOM.render(<ExerciseOne />, container);
        });

        const happyButton = getElementByTestId(container, "happy-button");
        expect(happyButton.textContent).toBe("Happy");
    });

    it("sad button has text \"Sad\"", () => {
        act(() => {
            ReactDOM.render(<ExerciseOne />, container);
        });

        const sadButton = getElementByTestId(container, "sad-button");
        expect(sadButton.textContent).toBe("Sad");
    });

    it("mood text starts with :)", () => {
        act(() => {
            ReactDOM.render(<ExerciseOne />, container);
        });

        const moodText = getElementByTestId(container, "mood-text");
        expect(moodText.textContent).toBe(":)");
    });

    it("clicking sad button switches mood text to :(", () => {
        act(() => {
            ReactDOM.render(<ExerciseOne />, container);
        });

        const sadButton = getElementByTestId(container, "sad-button");
        const moodText = getElementByTestId(container, "mood-text");

        act(() => {
            clickElement(sadButton);
        });

        expect(moodText.textContent).toBe(":(");
    });

    it("clicking happy button switches mood text to :)", () => {
        act(() => {
            ReactDOM.render(<ExerciseOne />, container);
        });

        const happyButton = getElementByTestId(container, "happy-button");
        const sadButton = getElementByTestId(container, "sad-button");
        const moodText = getElementByTestId(container, "mood-text");

        act(() => {
            clickElement(sadButton);
            clickElement(happyButton);
        });

        expect(moodText.textContent).toBe(":)");
    });

    it("the mood text is correct after repeated clicking of happy button and sad button", () => {
        act(() => {
            ReactDOM.render(<ExerciseOne />, container);
        });

        const happyButton = getElementByTestId(container, "happy-button");
        const sadButton = getElementByTestId(container, "sad-button");
        const moodText = getElementByTestId(container, "mood-text");

        act(() => {
            Array(3).fill(0).forEach(() => {
                clickElement(sadButton);
                clickElement(happyButton);
                clickElement(sadButton);
            });
        });

        expect(moodText.textContent).toBe(":(");

        act(() => {
            Array(3).fill(0).forEach(() => {
                clickElement(sadButton);
                clickElement(sadButton);
                clickElement(happyButton);
            });
        });

        expect(moodText.textContent).toBe(":)");
    });
});

import ExerciseTwo from "../src/exercises/ExerciseTwo";

describe("exercise two", () => {
    it("name input has placeholder of \"Name\"", () => {
        act(() => {
            ReactDOM.render(<ExerciseTwo />, container);
        });

        const nameInput = getElementByTestId(container, "name-input");

        expect(nameInput.placeholder).toBe("Name");
    });

    it("name input has a default value", () => {
        act(() => {
            ReactDOM.render(<ExerciseTwo />, container);
        });

        const nameInput = getElementByTestId(container, "name-input");

        expect(nameInput.value).not.toBe("");
    });

    it("default greeting uses the default name", () => {
        act(() => {
            ReactDOM.render(<ExerciseTwo />, container);
        });

        const nameInput = getElementByTestId(container, "name-input");
        const nameInputValue = nameInput.value;
        const greeting = getElementByTestId(container, "greeting");

        expect(greeting.textContent).toBe(`Hello ${nameInputValue}!`);
    });

    it("updating the name input updates the greeting", () => {
        act(() => {
            ReactDOM.render(<ExerciseTwo />, container);
        });

        const nameInput = getElementByTestId(container, "name-input");
        const greeting = getElementByTestId(container, "greeting");

        act(() => {
            setInputValue(nameInput, "Aniket");
        });
        expect(greeting.textContent).toBe("Hello Aniket!");

        act(() => {
            setInputValue(nameInput, "Bob");
        });
        expect(greeting.textContent).toBe("Hello Bob!");

        act(() => {
            setInputValue(nameInput, "");
        });
        expect(greeting.textContent).toBe("Hello !");
    });
});

import ExerciseThree, { CounterButtons } from "../src/exercises/ExerciseThree";
// import ExerciseThree, { CounterButtons } from "../src/solutions/ExerciseThree";

describe("exercise three", () => {
    it("counter buttons have names \"Increment\" and \"Decrement\"", () => {
        act(() => {
            ReactDOM.render(<ExerciseThree />, container);
        });

        const incrementButton = getElementByTestId(container, "increment-button");
        const decrementButton = getElementByTestId(container, "decrement-button");

        expect(incrementButton.textContent).toBe("Increment");
        expect(decrementButton.textContent).toBe("Decrement");
    });

    it("count display starts at \"Count: 0\"", () => {
        act(() => {
            ReactDOM.render(<ExerciseThree />, container);
        });

        const countDisplay = getElementByTestId(container, "count-display")

        expect(countDisplay.textContent).toBe("Count: 0")
    });

    it("increment button increases count by 1", () => {
        act(() => {
            ReactDOM.render(<ExerciseThree />, container);
        });

        const incrementButton = getElementByTestId(container, "increment-button");
        const countDisplay = getElementByTestId(container, "count-display")

        act(() => {
            Array(9).fill(0).forEach(() => {
                clickElement(incrementButton);
            });
        });

        expect(countDisplay.textContent).toBe("Count: 9")
    });

    it("increment button increases count by 1", () => {
        act(() => {
            ReactDOM.render(<ExerciseThree />, container);
        });

        const decrementButton = getElementByTestId(container, "decrement-button");
        const countDisplay = getElementByTestId(container, "count-display")

        act(() => {
            Array(7).fill(0).forEach(() => {
                clickElement(decrementButton);
            });
        });

        expect(countDisplay.textContent).toBe("Count: -7")
    });

    it("counter buttons component takes in only one prop called prop", () => {
        const SolutionThree = () => {
            const [count, setCount] = useState(0);

            return (
                <>
                    <h2>Exercise Three</h2>
                    <p data-testid="count-display-test">Count: {count}</p>
                    <CounterButtons prop={setCount} />
                </>
            );
        };
        act(() => {
            ReactDOM.render(<SolutionThree />, container);
        });

        const incrementButton = getElementByTestId(container, "increment-button");
        const decrementButton = getElementByTestId(container, "decrement-button");
        const countDisplay = getElementByTestId(container, "count-display-test")

        act(() => {
            Array(7).fill(0).forEach(() => {
                clickElement(decrementButton);
            });
        });

        act(() => {
            Array(2).fill(0).forEach(() => {
                clickElement(incrementButton);
            });
        });

        expect(countDisplay.textContent).toBe("Count: -5")
    });
});
import React from 'react';
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { generateGetElementByDataAttribute } from "generate-get-element-by-data-attribute";

import ExerciseOne from "../src/exercises/ExerciseOne";

let container;
const getElementByTestId = generateGetElementByDataAttribute("testid");

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
            sadButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
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
            sadButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            happyButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
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
                sadButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
                happyButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
                sadButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            });
        });

        expect(moodText.textContent).toBe(":(");

        act(() => {
            Array(3).fill(0).forEach(() => {
                sadButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
                sadButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
                happyButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
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

        console.log(nameInput.placeholder);

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
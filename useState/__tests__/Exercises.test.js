import ExerciseOne from "../src/exercises/ExerciseOne";

let container;
const getElementByTestId = generateGetElementByDataAttribute("testid");

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
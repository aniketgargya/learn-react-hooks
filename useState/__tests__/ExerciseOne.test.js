import React from "react";

import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ExerciseOne from "../src/exercises/ExerciseOne";

afterEach(cleanup);

describe("", () => {
    it("happy button has text \"Happy\"", () => {
        const { getByTestId } = render(<ExerciseOne />);
        expect(getByTestId("happy-button")).toHaveTextContent(/^Happy$/);
    });

    it("sad button has text \"Sad\"", () => {
        const { getByTestId } = render(<ExerciseOne />);
        expect(getByTestId("sad-button")).toHaveTextContent(/^Sad$/);
    });

    it("mood text starts with :)", () => {
        const { getByTestId } = render(<ExerciseOne />);
        expect(getByTestId("mood-text")).toHaveTextContent(/^:\)$/);
    });
});

describe("", () => {
    it("clicking sad button switches mood text to :(", () => {
        const { getByTestId } = render(<ExerciseOne />);
        fireEvent.click(getByTestId("sad-button"));
        expect(getByTestId("mood-text")).toHaveTextContent(/^:\($/);
    });

    it("clicking sad button switches mood text to :(", () => {
        const { getByTestId } = render(<ExerciseOne />);
        fireEvent.click(getByTestId("sad-button"));
        expect(getByTestId("mood-text")).toHaveTextContent(/^:\($/);
    });

    it("clicking happy button switches mood text to :)", () => {
        const { getByTestId } = render(<ExerciseOne />);
        fireEvent.click(getByTestId("sad-button"));
        fireEvent.click(getByTestId("happy-button"));
        expect(getByTestId("mood-text")).toHaveTextContent(/^:\)$/);
    });

    it("the mood text is correct after repeated clicking of happy button and sad button", () => {
        const { getByTestId } = render(<ExerciseOne />);
        Array(3).fill(0).forEach(() => {
            fireEvent.click(getByTestId("sad-button"));
            fireEvent.click(getByTestId("happy-button"));
            fireEvent.click(getByTestId("sad-button"));
        });

        expect(getByTestId("mood-text")).toHaveTextContent(/^:\($/);

        Array(3).fill(0).forEach(() => {
            fireEvent.click(getByTestId("sad-button"));
            fireEvent.click(getByTestId("happy-button"));
            fireEvent.click(getByTestId("happy-button"));
        });

        expect(getByTestId("mood-text")).toHaveTextContent(/^:\)$/);
    });
});
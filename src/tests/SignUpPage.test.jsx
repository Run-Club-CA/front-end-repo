// Initial test set up - 
// remove this note with more comprehensive explanation of tests!

// Import render and screen for react testing library
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Import jest matchers from jest-dom
import "@testing-library/jest-dom";

import SignUpPage from "../pages/SignUpPage";

test("Sign up page renders basic text components", () => {
    render(<SignUpPage />);

    let signUpHeader = screen.getByText("Sign Up");

    expect(signUpHeader).toBeTruthy();
})
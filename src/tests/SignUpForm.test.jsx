// Initial test set up - 
// remove this note with more comprehensive explanation of tests!

// Import render and screen for react testing library
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Import jest matchers from jest-dom
import "@testing-library/jest-dom";

import SignUpForm from "../components/SignUpForm";



test("Sign up form renders, with correct labels", () => {
    render(<SignUpForm />);

    // Use screen.getByText to ensure labels are rendering within document
    expect(screen.getByText("First Name")).toBeInTheDocument();
    expect(screen.getByText("Last Name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("UserName")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    

})
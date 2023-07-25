// Import render and screen for react testing library
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Import jest matchers from jest-dom
import "@testing-library/jest-dom";

// Import component to test
import LoginPage from "../pages/LoginPage";

test("Login Page loads and displays text content", () => {
    let {container} = render(<LoginPage />);

    let seeIntroText = screen.getByText("A Social running club in Waverly, Come join us and enjoy running at all skill levels!");

    let signUpLink = screen.getByRole("link");
    
    // Test login page displays intro text
    expect(seeIntroText).toBeTruthy();

    // Test sign up link is displayed
    expect(signUpLink).toBeTruthy();


})
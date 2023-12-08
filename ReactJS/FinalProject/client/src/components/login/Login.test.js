import {render, screen} from "@testing-library/react";

import {BrowserRouter, Form} from "react-router-dom";

import Login, {FormInformation} from "./Login.jsx";

import AuthenticationProvider from "../../contexts/AuthenticationContext.jsx";

describe('Test Login Component when', () => {
    test('when user is not authenticated', () => {
        render(
            <BrowserRouter>
                <AuthenticationProvider setIsLogin={null} isLogin={false}>
                    <Login/>
                </AuthenticationProvider>
            </BrowserRouter>
        );

        screen.debug();

        const formElement = screen.getByTestId('login-form');
        const usernameLabel = screen.getByLabelText(FormInformation.username.label);
        const passwordInput = screen.getByLabelText(FormInformation.password.label);

        expect(formElement).toBeInTheDocument();
        expect(usernameLabel).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
});
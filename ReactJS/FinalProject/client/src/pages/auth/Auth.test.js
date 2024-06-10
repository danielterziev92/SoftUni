import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import {BrowserRouter} from "react-router-dom";

import Auth, {FormInformation} from "./Auth.jsx";

import AuthenticationProvider from "../../contexts/AuthenticationContext.jsx";
import MessageProvider from "../../contexts/MessageContext.jsx";

import Paths from "../../utils/Paths.js";

const MockingLoginComponent = ({setIsMessageBoxShow, isMessageBoxShow, setIsLogin, isLogin}) => {
    return (
        <BrowserRouter>
            <MessageProvider setIsMessageBoxShow={setIsMessageBoxShow} isMessageBoxShow={isMessageBoxShow}>
                <AuthenticationProvider setIsLogin={setIsLogin} isLogin={isLogin}>
                    <Auth/>
                </AuthenticationProvider>
            </MessageProvider>
        </BrowserRouter>
    );
}

describe('Test Auth Component when', () => {
    const setIsMessageBoxShow = jest.fn();
    const isMessageBoxShow = null;
    const setIsLogin = jest.fn();
    const isLogin = false;

    const renderComponent = () => {
        return render(<MockingLoginComponent
            setIsMessageBoxShow={setIsMessageBoxShow}
            isMessageBoxShow={isMessageBoxShow}
            isLogin={isLogin}
            setIsLogin={setIsLogin}
        />);
    }

    test('when user is not authenticated', () => {
        renderComponent();

        const formElement = screen.getByTestId('auth-form');
        const usernameLabel = screen.getByLabelText(FormInformation.username.label);
        const passwordInput = screen.getByLabelText(FormInformation.password.label);

        expect(formElement).toBeInTheDocument();
        expect(usernameLabel).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });


    test('successful auth and redirects to a specific page', async () => {
        renderComponent();

        const usernameInput = screen.getByLabelText('Потребителско име');
        const passwordInput = screen.getByLabelText('Парола');

        const formElement = screen.getByTestId('auth-form');

        await userEvent.type(usernameInput, 'username');
        await userEvent.type(passwordInput, 'Password!23');

        fireEvent.submit(formElement);

        await waitFor(() => {
            expect(window.location.pathname).toBe(Paths.afterSignIn);
        });
    });
});
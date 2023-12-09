import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import {BrowserRouter} from "react-router-dom";

import Login, {FormInformation} from "./Login.jsx";

import AuthenticationProvider from "../../contexts/AuthenticationContext.jsx";
import MessageProvider from "../../contexts/MessageContext.jsx";

import Paths from "../../utils/Paths.js";

const MockingLoginComponent = ({setIsMessageBoxShow, isMessageBoxShow, setIsLogin, isLogin}) => {
    return (
        <BrowserRouter>
            <MessageProvider setIsMessageBoxShow={setIsMessageBoxShow} isMessageBoxShow={isMessageBoxShow}>
                <AuthenticationProvider setIsLogin={setIsLogin} isLogin={isLogin}>
                    <Login/>
                </AuthenticationProvider>
            </MessageProvider>
        </BrowserRouter>
    );
}

describe('Test Login Component when', () => {
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

        const formElement = screen.getByTestId('login-form');
        const usernameLabel = screen.getByLabelText(FormInformation.username.label);
        const passwordInput = screen.getByLabelText(FormInformation.password.label);

        expect(formElement).toBeInTheDocument();
        expect(usernameLabel).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });


    test('successful login and redirects to a specific page', async () => {
        renderComponent();

        const usernameInput = screen.getByLabelText('Потребителско име');
        const passwordInput = screen.getByLabelText('Парола');

        const formElement = screen.getByTestId('login-form');

        await userEvent.type(usernameInput, 'username');
        await userEvent.type(passwordInput, 'Password!23');

        fireEvent.submit(formElement);

        await waitFor(() => {
            expect(window.location.pathname).toBe(Paths.afterLogin);
        });
    });
});
import {render, screen, fireEvent, waitFor} from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';

import {BrowserRouter} from "react-router-dom";

import Login, {FormInformation} from "./Login.jsx";

import AuthenticationProvider from "../../contexts/AuthenticationContext.jsx";
import MessageProvider from "../../contexts/MessageContext.jsx";

import Paths from "../../utils/Paths.js";

fetchMock.enableMocks();

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useEffect: jest.fn(),
    useLayoutEffect: jest.fn(),
}));

describe('Test Login Component when', () => {
    test('when user is not authenticated', () => {
        render(
            <BrowserRouter>
                <AuthenticationProvider setIsLogin={null} isLogin={false}>
                    <Login/>
                </AuthenticationProvider>
            </BrowserRouter>
        );

        const formElement = screen.getByTestId('login-form');
        const usernameLabel = screen.getByLabelText(FormInformation.username.label);
        const passwordInput = screen.getByLabelText(FormInformation.password.label);

        expect(formElement).toBeInTheDocument();
        expect(usernameLabel).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });


    test('successful login and redirects to a specific page', async () => {

        fetchMock.mockResolvedValueOnce({ /* mock response with token */});

        render(
            <BrowserRouter>
                <MessageProvider setIsMessageBoxShow={() => {
                }} isMessageBoxShow={null}>
                    <AuthenticationProvider setIsLogin={jest.fn()} isLogin={false}>
                        <Login/>
                    </AuthenticationProvider>
                </MessageProvider>
            </BrowserRouter>
        );

        const usernameInput = screen.getByLabelText('Потребителско име');
        const passwordInput = screen.getByLabelText('Парола');

        const formElement = screen.getByTestId('login-form');

        await userEvent.type(usernameInput, 'React');
        await userEvent.type(passwordInput, 'React!23');

        fireEvent.submit(formElement);

        await waitFor(() => {
            expect(window.location.pathname).toBe(Paths.afterLogin);
        });

    });
});
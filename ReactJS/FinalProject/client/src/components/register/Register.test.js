import {fireEvent, render, screen,} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import Register from "./Register.jsx";
import AuthenticationProvider from "../../contexts/AuthenticationContext.jsx";


const MockingRegisterComponent = () => {
    return (
        <BrowserRouter>
            <AuthenticationProvider>
                <Register/>
            </AuthenticationProvider>
        </BrowserRouter>
    );
};

describe('Test Register Component', () => {
    const onSubmitHandler = jest.fn();

    test('have form element to be in the document', () => {
        render(<MockingRegisterComponent/>);

        expect(screen.getByRole('form', {name: 'register-form'})).toBeInTheDocument();
    });

    test('have submit element to be in the document', () => {
        render(<MockingRegisterComponent/>);

        expect(screen.getByRole('button', {name: 'Регистрация'})).toBeInTheDocument();
    });

    test('does not submit an empty form', () => {
        render(<MockingRegisterComponent/>);

        screen.getByRole('form', {name: 'register-form'}).onsubmit = onSubmitHandler;

        fireEvent.click(screen.getByRole('button'), {name: 'Регистрация'});

        expect(onSubmitHandler).not.toHaveBeenCalled();
    });

    test('if username is not valid to show the user note paragraph element', () => {
        render(<MockingRegisterComponent/>);

        screen.getByRole('form', {name: 'register-form'});

        fireEvent.change(screen.getByRole('textbox', {name: 'username'}), {
            target: {value: 'tes'}
        })

        expect(screen.getByText(/Потребителското име трябва да има:/i)).toBeVisible();
    })
});
import {cleanup, fireEvent, render, screen,} from '@testing-library/react';
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

    beforeEach(() => {
        cleanup();
    });

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

        const usernoteByAriaLabel = screen.getByLabelText('usernote');

        expect(usernoteByAriaLabel).toBeInTheDocument();
        expect(usernoteByAriaLabel).toHaveClass('instructions');
    })

    test('if username is valid user note paragraph element to be not visible', () => {
        render(<MockingRegisterComponent/>);

        screen.getByRole('form', {name: 'register-form'});

        fireEvent.change(screen.getByRole('textbox', {name: 'username'}), {
            target: {value: 'test'}
        })

        const usernoteByAriaLabel = screen.getByLabelText('usernote');

        expect(usernoteByAriaLabel).toBeInTheDocument();
        expect(usernoteByAriaLabel).toHaveClass('hide');
    })

    test('if password is not valid to show the password note paragraph element', () => {
        render(<MockingRegisterComponent/>);

        screen.getByRole('form', {name: 'register-form'});

        fireEvent.change(screen.getByRole('textbox', {name: 'password'}), {
            target: {value: 'tes'}
        })

        const usernoteByAriaLabel = screen.getByLabelText('emailnote');

        expect(usernoteByAriaLabel).toBeInTheDocument();
        expect(usernoteByAriaLabel).toHaveClass('instructions');
    })

});
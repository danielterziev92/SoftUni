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

});
import {render, screen,} from '@testing-library/react';
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
    test('have form element to be in the document', () => {
        render(<MockingRegisterComponent/>);

        expect(screen.getByRole('form', {name: 'register-form'})).toBeInTheDocument();
    });

    // test('have onSubmit function in form element', () => {
    //     const onSubmitHandler = jest.fn();
    //
    // });
});
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

describe('Test Register Component have', () => {
    test('form element to be in the document', () => {
        render(<MockingRegisterComponent/>);

        screen.debug();
        expect(screen.getByRole('form')).toBeInTheDocument();
    });


});
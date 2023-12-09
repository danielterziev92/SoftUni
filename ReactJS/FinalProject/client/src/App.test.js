import {render, screen} from "@testing-library/react";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";

const MockingAppComponent = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}

describe('Test App Component when', () => {

    test('user is now authenticated and do not show Aside Component', () => {
        render(<MockingAppComponent/>);

        const LogoImageElement = screen.queryByRole('img', {name: /User Prifile Picture/i});
        expect(LogoImageElement).not.toBeInTheDocument();
    });

    test('user is now authenticated and show Index Component', () => {
        render(<MockingAppComponent/>);

        const LogoImageElement = screen.getByRole('img', {name: /Logo/i});
        const headingElement = screen.getByText(/Добре дошли в нашата платформа/i);

        expect(LogoImageElement).toBeInTheDocument();
        expect(headingElement).toBeInTheDocument();
    });

});
import {render, screen} from "@testing-library/react";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";

describe('Test App Component when', () => {

    test('user is now authenticated and do not show Aside Component', () => {
        render(<BrowserRouter><App/></BrowserRouter>);

        const LogoImageElement = screen.queryByRole('img', {name: /User Prifile Picture/i});
        expect(LogoImageElement).not.toBeInTheDocument();
    });

    test('user is now authenticated and show Index Component', () => {
        render(<BrowserRouter><App/></BrowserRouter>);

        const LogoImageElement = screen.getByRole('img', {name: /Logo/i});
        const headingElement = screen.getByText(/Добре дошли в нашата платформа/i);

        expect(LogoImageElement).toBeInTheDocument();
        expect(headingElement).toBeInTheDocument();
    });

});
import {Component} from "react";
import Error from "./error/Error.jsx";

export default class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false,
            errorMessage: '',
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMessage: error.toString(),
        }
    }

    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <Error errorMessage={this.state.errorMessage}/>;
        }

        return this.props.children;
    }
}
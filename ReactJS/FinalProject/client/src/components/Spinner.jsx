import spinnerStyle from './Spinner.module.css'

export default function Spinner() {
    return (
        <div className={spinnerStyle.spinnerContainer}>
            <div className={spinnerStyle.spinner}></div>
        </div>
    );
}
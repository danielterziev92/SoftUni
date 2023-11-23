import {useState} from "react";

export default function useFormValidation(initialValidationRules) {
    const [validationRules] = useState(initialValidationRules);
    const [validationErrors, setValidationErrors] = useState({});

    const validateForm = (name, value) => {
        const allErrorMessages = [];

        validationRules[name].map(rule => {
            if (rule.condition && !rule.condition(value)) {
                allErrorMessages.push(rule.errorMessage);
            }
        });

        if (allErrorMessages.length > 0) {
            setValidationErrors(state => ({
                ...state,
                [name]: allErrorMessages,
            }))
        } else {
            setValidationErrors(state => ({
                ...state,
                [name]: [],
            }))
        }
    };

    return {validationErrors, validateForm};
}
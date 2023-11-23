import {useState} from "react";

export default function useFormValidation(validationRules) {
    const [validationErrors, setValidationErrors] = useState(validationRules);

    const validateForm = (value) => {
        let isValid = true;
        const newErrors = {};

        Object.entries(validationRules).forEach(([fieldName, rules]) => {
            rules.forEach(rule => {
                if (!rule.condition && rule.condition(value)) {
                    return;
                }

                isValid = false;
                newErrors[fieldName] = rule.errorMessage;
            });
        });

        setValidationErrors(newErrors);
        console.log(newErrors)

        return isValid;
    };

    return {validationErrors, validateForm};
}
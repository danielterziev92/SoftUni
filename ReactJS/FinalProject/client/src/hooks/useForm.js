import {useState} from "react";

export default function useForm(initialData) {
    const [formValue, setFormValue] = useState(initialData);

    const typeHandlers = {
        'number': (target) => Number(target.value),
        'checkbox': (target) => target.checked,
        'radio': (target) => target.id,
    }

    const changeDataHandler = (e) => {
        let {type, name, value} = e.target;

        if (typeHandlers[type]) {
            value = typeHandlers[type](e.target);
        }

        setFormValue(state => ({
            ...state,
            [name]: value,
        }));
    };

    const updateFormValue = (newData) => {
        setFormValue(newData);
    }

    const updateFormValueByKeyAndValue = (key, value) => {
        setFormValue(state => ({
            ...state,
            [key]: value,
        }));
    };


    return {
        formValue,
        updateFormValue,
        updateFormValueByKeyAndValue,
        changeDataHandler,
    }
}
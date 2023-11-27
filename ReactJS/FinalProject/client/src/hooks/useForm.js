import {useState} from "react";


export default function useForm(initialData, onSubmitFormHandler) {
    const [formValue, setFormValue] = useState(initialData);

    const typeHandlers = {
        'number': (target) => Number(target.value),
        'checkbox': (target) => target.checked,
        'radio': (target) => target.id,
        'file': (target) => target.files[0],
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
        setFormValue((state) => ({
            ...state,
            [key]: value,
        }));
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        onSubmitFormHandler(formValue);
    }


    return {
        formValue,
        updateFormValue,
        updateFormValueByKeyAndValue,
        changeDataHandler,
        onSubmitForm,
    }
}
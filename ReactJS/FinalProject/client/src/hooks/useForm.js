import {useState} from "react";

export default function useForm({initialData,}) {
    const [data, setData] = useState(initialData);

    const typeHandlers = {
        'number': (value) => Number(value),
        'checkbox': (value) => value.checked,
        'radio': (value) => value.id,
    }

    const changeDataHandler = (e) => {
        let {type, name, value} = e.target;

        if (typeHandlers[type]) {
            value = typeHandlers[type](e.target);
        }

        setData(state => ({
            ...state,
            [name]: value,
        }));
    };

    const changeSelectedGroupClickHandler = (e) => {
        setData(state => ({
            ...state,
            selectedGroup: Number(e.target.id),
        }));
    }


    return {
        data,
        changeDataHandler,
        changeSelectedGroupClickHandler,
    }
}
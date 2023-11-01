import {useState} from "react";

export default function AddTaskField() {
    const [inputValue, setInputValue] = useState('');
    const handleInputChangeData = (e) => {
        setInputValue(e.target.value);
    };

    const addTaskData = async () => {
        try {
            const url = 'http://localhost:3030/jsonstore/todos'

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({text: inputValue, isCompleted: false})
            })

            if (!response.ok) {
                throw new Error('Data went wrong')
            }

            const data = await response.json()
            setInputValue('');

        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <input type="text"
                   value={inputValue}
                   onChange={handleInputChangeData}
                   placeholder="Please enter your task here ..."/>
            <button onClick={addTaskData}>Add Task</button>
        </div>
    );
}
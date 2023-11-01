import AddTodoButton from "./AddTodoButton.jsx";
import {useEffect, useState} from "react";
import TotoItem from "./TodoItem.jsx";
import AddTaskField from "./AddTaskField.jsx";

export default function Main() {
    const url = 'http://localhost:3030/jsonstore/todos'
    const [data, setData] = useState([]);
    const [isAddTodoButtonVisible, setAddTodoButtonVisible] = useState(false);

    const toggleTodoButtonVisible = () => {
        setAddTodoButtonVisible(!isAddTodoButtonVisible);
        console.log(isAddTodoButtonVisible)
    };

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                return response.json()
            })
            .then((data) => setData(Object.values(data).reverse()))
            .catch(err => console.log(err));
    }, [data]);


    return (
        <main className="main">

            <section className="todo-list-container">
                <h1>Todo List</h1>

                {isAddTodoButtonVisible && <AddTaskField/>}
                <AddTodoButton onClick={toggleTodoButtonVisible}/>

                <div className="table-wrapper">

                    <table className="table">
                        <thead>
                        <tr>
                            <th className="table-header-task">Task</th>
                            <th className="table-header-status">Status</th>
                            <th className="table-header-action">Action</th>
                        </tr>
                        </thead>
                        <tbody>

                        {data.map(element =>
                            <TotoItem key={element._id} id={element._id} task={element.text}
                                      status={element.isCompleted}/>
                        )}

                        </tbody>
                    </table>
                </div>
            </section>
        </main>
    )
}
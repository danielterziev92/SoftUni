export default function TotoItem({id, task, status}) {

    const changeStatus = async () => {

        try {

            const url = 'http://localhost:3030/jsonstore/todos'

            const response = await fetch(`${url}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({_id: id, text: task, isCompleted: !status})
            });

            if (response.ok) {
                console.log('Data update successfully');
            } else {
                console.error('Update data failed');
            }

        } catch (e) {
            console.log("Fetch error:", e)
        }
    }

    return (
        <tr className={`todo  ${status ? "is-completed" : ""}`}>
            <td>{task}</td>
            <td>{status ? "Complete" : "Incomplete"}</td>
            <td className="todo-action">
                <button className="btn todo-btn" onClick={changeStatus}>Change status</button>
            </td>
        </tr>
    );
}
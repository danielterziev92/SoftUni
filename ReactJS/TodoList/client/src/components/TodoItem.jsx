export default function TotoItem({task, status, action}) {
    return (
        <tr className="todo is-completed">
            <td>Give dog a bath</td>
            <td>Complete</td>
            <td className="todo-action">
                <button className="btn todo-btn">Change status</button>
            </td>
        </tr>
    );
}
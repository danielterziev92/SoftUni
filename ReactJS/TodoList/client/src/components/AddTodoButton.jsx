export default function AddTodoButton(props) {
    return (
        <div className="add-btn-container">
            <button className="btn" onClick={props.onClick}>+ Add new Todo</button>
        </div>
    )
}
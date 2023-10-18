import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task =>(
            <li
            className={`task${task.done && props.hideDoneTasks ? "task--hidden" : ""}
            ${task.done ? "task--done" : ""}>`}
            >
               <button className="toggleDone">
    {task.done ? "✔" : ""}
    </button>
    
<span className={`tasks__content${task.done ? " tasks__content--done" : ""}`}>
    {task.content}</span>
    <button className="remove">
    🗑
    </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
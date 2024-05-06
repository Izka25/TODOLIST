import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`task ${task.done && hideDone ? "task--hidden" : ""}
            ${task.done ? "task--done" : ""}>`}
      >
        <button className="toggleDone">{task.done ? "✔" : ""}</button>

        <span
          className={`tasks__content${
            task.done ? " tasks__content--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button className="remove"
        onClick={() => removeTask(task.id)}
        >
          🗑
          </button>
      </li>
    ))}
  </ul>
);

export default Tasks;

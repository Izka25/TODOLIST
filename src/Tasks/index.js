import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ul className="tasks">
    {tasks.map(task => (
      <li
        key={task.id}
        className={`task ${task.done && hideDone ? "task--hidden" : ""}
            ${task.done ? "task--done" : ""}>`}
      >
        <button 
        className="toggleDone" onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}</button>

        <span
          className={`tasks__content${
            task.done ? " tasks__content--done" : ""
          }`}
        >
          {task.id} - {task.content}
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

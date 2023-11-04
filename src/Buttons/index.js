import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="section__buttons">
    {tasks.length > 0 && (
      <>
        <button className="hideDoneButton">
          {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button
          className="makeAllDone"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;

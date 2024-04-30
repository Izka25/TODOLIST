import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="section__buttons">
    {tasks.length > 0 && (
      <>
        <button className="hideDoneButton">
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
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

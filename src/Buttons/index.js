import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div className="section__buttons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="hideDoneButton">
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button
        onClick={setAllDone}
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

import { Div, HideDoneButton, MakeAllDone } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Div>
    {tasks.length > 0 && (
      <>
        <HideDoneButton onClick={toggleHideDone}>
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </HideDoneButton>
        <MakeAllDone
          onClick={setAllDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </MakeAllDone>
      </>
    )}
  </Div>
);

export default Buttons;

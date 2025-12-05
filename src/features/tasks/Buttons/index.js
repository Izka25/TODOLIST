import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, HideDoneButton, MakeAllDone, Button } from "./styled";
import { fetchExampleTasks, selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone, setAllDone, toggleHideDone,} from "../tasksSlice";

const Buttons = () => {
const areTasksEmpty = useSelector(selectAreTasksEmpty);
const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
const hideDone = useSelector(selectHideDone);

const dispatch = useDispatch();

  return (
  <StyledButtons>
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
    </Button>
    {!areTasksEmpty > 0 && (
      <>
        <HideDoneButton onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </HideDoneButton>
        <MakeAllDone
          onClick={() => dispatch(setAllDone())}
          disabled={isEveryTaskDone}
        >
          Ukończ wszystkie
        </MakeAllDone>
      </>
    )}
  </StyledButtons>
);
}
export default Buttons;

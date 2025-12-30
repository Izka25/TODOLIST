import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, HideDoneButton, MakeAllDone, Button, Wrapper } from "./styled";
import { selectAreTasksEmpty, selectHideDone, selectIsEveryTaskDone, setAllDone, toggleHideDone,} from "../../tasksSlice";

const Buttons = () => {
const areTasksEmpty = useSelector(selectAreTasksEmpty);
const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
const hideDone = useSelector(selectHideDone);

const dispatch = useDispatch();

  return (
  <Wrapper>
   {!areTasksEmpty && (
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
  </Wrapper>
);
}
export default Buttons;

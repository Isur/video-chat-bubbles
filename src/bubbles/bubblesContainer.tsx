import { FC, useCallback, useEffect, useReducer } from "react";
import { bubblesReducer } from "./reducer";
import { BubblesAnimatedList } from "./bubblesAnimatedList";

export const BubblesContainer: FC = () => {
  const [state, dispatch] = useReducer(bubblesReducer, []);

  const removeBubble = () => {
    setTimeout(() => {
      dispatch({ type: "REMOVE_BUBBLE" });
    }, 10000);
  }

  const eventHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        if(state[state.length - 1].text === "") return;
        dispatch({ type: "ADD_BUBBLE" });
        removeBubble();
      } else if (e.key === "Backspace") {
        dispatch({ type: "BACKSPACE" });
      } else if (["Shift", "Alt", "Control"].includes(e.key)){
        // do nothing
      } else {
        if(state.length === 0) {
          dispatch({ type: "ADD_BUBBLE" });
          dispatch({ type: "UPDATE_BUBBLE", payload: e.key });
        } else {
          dispatch({ type: "UPDATE_BUBBLE", payload: e.key });
        }
      }
    },
    [state],
  )

  useEffect(() => {
    document.addEventListener('keydown', eventHandler);

    return () => {
      document.removeEventListener('keydown', eventHandler);
    }
  }, [eventHandler])

  return (
    <BubblesAnimatedList bubbles={state} />
  )
}

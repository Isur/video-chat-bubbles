import { FC, useCallback, useContext, useEffect, useReducer } from "react";
import { bubblesReducer } from "./reducer";
import { BubblesAnimatedList } from "./bubblesAnimatedList";
import { ConfigContext } from "@/configurator";

export const BubblesContainer: FC = () => {
  const [state, dispatch] = useReducer(bubblesReducer, []);
  const { config } = useContext(ConfigContext);

  useEffect(() => {
    dispatch({ type: "REMOVE_ALL" });
    const timer = setTimeout(() => {
      if (!config.on) {
        dispatch({
          type: "ADD_BUBBLE",
          payload:
            "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
        });
      }
    }, 1000);
    const timer2 = setTimeout(() => {
      if (!config.on) {
        dispatch({
          type: "ADD_BUBBLE",
          payload:
            "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        });
      }
    }, 1500);
    const timer3 = setTimeout(() => {
      if (!config.on) {
        dispatch({ type: "ADD_BUBBLE", payload: "TEST BUBBLE" });
      }
    }, 2000);
    const timer4 = setTimeout(() => {
      if (!config.on) {
        dispatch({
          type: "ADD_BUBBLE",
          payload:
            "adsfsdalfkjasdlkfjsdalk;fjsadlkfsdalkfjkdsjaflksjdflkasjflks;adjfklsdajflaksjflksadfjlksadfjdklsa",
        });
      }
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [config.on]);

  const removeBubble = useCallback(() => {
    setTimeout(
      () => {
        dispatch({ type: "REMOVE_BUBBLE" });
      },
      config.time + state.length * 1500
    );
  }, [state.length, config]);

  const eventHandler = useCallback(
    (e: KeyboardEvent) => {
      if (!config.on) return;
      if (e.key === "Enter") {
        if (state[state.length - 1].text === "") return;
        dispatch({ type: "ADD_BUBBLE" });
        removeBubble();
      } else if (e.key === "Backspace") {
        dispatch({ type: "BACKSPACE" });
      } else if (["Shift", "Alt", "Control"].includes(e.key)) {
        // do nothing
      } else {
        if (state.length === 0) {
          dispatch({ type: "ADD_BUBBLE" });
          dispatch({ type: "UPDATE_BUBBLE", payload: e.key });
        } else {
          dispatch({ type: "UPDATE_BUBBLE", payload: e.key });
        }
      }
    },
    [state, config, removeBubble]
  );

  useEffect(() => {
    document.addEventListener("keydown", eventHandler);

    return () => {
      document.removeEventListener("keydown", eventHandler);
    };
  }, [eventHandler]);

  return <BubblesAnimatedList bubbles={state} />;
};

export type Bubble = {
  id: string;
  text: string;
};

export type Action =
  | ActionAddBubble
  | ActionRemoveBubble
  | ActionTypeInBubble
  | ActionBackspace
  | ActionRemoveAll;

type ActionAddBubble = {
  type: "ADD_BUBBLE";
  payload?: string;
};

type ActionRemoveBubble = {
  type: "REMOVE_BUBBLE";
};

type ActionTypeInBubble = {
  type: "UPDATE_BUBBLE";
  payload: string;
};

type ActionBackspace = {
  type: "BACKSPACE";
};

type ActionRemoveAll = {
  type: "REMOVE_ALL";
};

export function bubblesReducer(state: Bubble[], action: Action) {
  switch (action.type) {
    case "ADD_BUBBLE":
      return [
        ...state,
        {
          id: new Date().getTime().toString(),
          text: action.payload || "",
        },
      ];
    case "REMOVE_BUBBLE": {
      const [, ...newState] = [...state];
      return newState;
    }
    case "UPDATE_BUBBLE": {
      const newState = [...state];
      newState[newState.length - 1].text += action.payload!;
      return newState;
    }
    case "BACKSPACE": {
      const newState = [...state];
      newState[newState.length - 1].text = newState[
        newState.length - 1
      ].text.slice(0, -1);
      return newState;
    }
    case "REMOVE_ALL": {
      return [];
    }
    default:
      return state;
  }
}

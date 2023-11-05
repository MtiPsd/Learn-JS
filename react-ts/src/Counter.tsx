import { ChangeEvent, ReactNode, useReducer } from "react";

const initialState = { count: 0, text: "" };

const enum ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

type ReducerAction = {
  type: ACTION_TYPE;
  payload?: string;
};

function reducer(
  state: typeof initialState,
  action: ReducerAction,
): typeof initialState {
  //
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return { ...state, count: state.count + 1 };

    case ACTION_TYPE.DECREMENT:
      return { ...state, count: state.count - 1 };

    case ACTION_TYPE.NEW_INPUT:
      return { ...state, text: action.payload || "" };

    default:
      throw new Error();
  }
}

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const [{ count, text }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const increment = () => dispatch({ type: ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: ACTION_TYPE.DECREMENT });

  function handleTextInput(e: ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: ACTION_TYPE.NEW_INPUT,
      payload: e.target.value,
    });
  }

  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

      <input type="text" onChange={handleTextInput} />
      <h2>{text}</h2>
    </>
  );
};
export default Counter;

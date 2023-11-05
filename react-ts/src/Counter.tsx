import { useState, ReactNode, useReducer } from "react";

const initialState = { count: 0 };

const enum ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

type ReducerAction = {
  type: ACTION_TYPE;
};

function reducer(
  state: typeof initialState,
  action: ReducerAction,
): typeof initialState {
  //
  switch (action.type) {
    case ACTION_TYPE.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case ACTION_TYPE.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      throw new Error();
  }
}

type ChildrenType = {
  children: (num: number) => ReactNode;
};

const Counter = ({ children }: ChildrenType) => {
  const [{ count }, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: ACTION_TYPE.INCREMENT });
  const decrement = () => dispatch({ type: ACTION_TYPE.DECREMENT });

  return (
    <>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </>
  );
};
export default Counter;

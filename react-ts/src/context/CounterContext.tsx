import {
  ChangeEvent,
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

//////////////////// Types ////////////////////
interface State {
  count: number;
  text: string;
}

enum ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  NEW_INPUT,
}

interface Action {
  type: ACTION_TYPE;
  payload?: string;
}

interface Props {
  children: ReactElement | ReactElement[];
}

interface Context {
  state: State;
  decrement: () => void;
  increment: () => void;
  handleTextInput: (e: ChangeEvent<HTMLInputElement>) => void;
}
///////////////////////////////////////////////

const initState: State = { count: 0, text: "" };

function reducer(state: State, action: Action): State {
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

const initContext: Context = {
  state: initState,
  decrement: () => {},
  increment: () => {},
  handleTextInput: () => {},
};

const CounterContext = createContext<Context>(initContext);

function CounterProvider({ children }: Props): ReactElement {
  const [state, dispatch] = useReducer(reducer, initState);

  // Wrap these with useCallback so it doesn not re created again
  const increment = useCallback(
    () => dispatch({ type: ACTION_TYPE.INCREMENT }),
    [],
  );

  const decrement = useCallback(
    () => dispatch({ type: ACTION_TYPE.DECREMENT }),
    [],
  );

  const handleTextInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({
        type: ACTION_TYPE.NEW_INPUT,
        payload: e.target.value,
      });
    },
    [],
  );

  return (
    <CounterContext.Provider
      value={{
        increment,
        decrement,
        handleTextInput,
        state,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

function useCounter(): Context {
  const context = useContext(CounterContext);
  if (context === undefined) {
    throw new Error(
      "CounterContext was used outside the CounterProvider",
    );
  }
  return context;
}

export { useCounter, CounterProvider };

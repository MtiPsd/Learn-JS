import { ReactNode } from "react";
import { useCounter } from "./context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};

function Counter({ children }: ChildrenType) {
  const { decrement, handleTextInput, increment, state } =
    useCounter();
  const { count, text } = state;

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
}
export default Counter;

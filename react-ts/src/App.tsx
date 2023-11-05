import { useCallback, useEffect, useState, useRef } from "react";

interface User {
  id: number;
  username: string;
}

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<Array<User> | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => console.log("unmounting ...");
  }, [users]);

  const addTwo = useCallback((e: any) => {
    setCount(prev => prev + 2);
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default App;

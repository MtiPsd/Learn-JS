import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";

function App() {
  const [counter, setCounter] = useState<number>(1);

  return (
    <>
      <Heading title="Hello" />
      <Section>This is My Children</Section>
      <Counter setCounter={setCounter}>This is {counter}</Counter>
    </>
  );
}

export default App;

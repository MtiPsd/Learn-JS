import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

function App() {
  const [counter, setCounter] = useState<number>(1);

  return (
    <>
      <Heading title="Hello" />
      <Section>This is My Children</Section>
      <Counter setCounter={setCounter}>This is {counter}</Counter>

      <List
        items={["Coffee", "Words", "Tea"]}
        render={(item: string) => (
          <span className="gold">{item}</span>
        )}
      />
    </>
  );
}

export default App;

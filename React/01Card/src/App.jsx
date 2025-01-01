import { useEffect, useState } from "react";
import Card from "./components/Card";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>React Learning</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer: {counter}</p> */}

      <Card username="abc" />
      <Card post="Software Developer" />
      <Card />
    </>
  );
}

export default App;

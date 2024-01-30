import { useState } from "react";
let i = 0
export default function App() {
  const [data, setData] = useState(i);

  function Increament() {
    setData(i++)
  }

  function Decrement() {
    setData(i--)
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={Increament}>Increament</button>
      <button onClick={Decrement}>Decrement </button>
    </div>
  );
}

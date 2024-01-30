import { useState } from "react";

export default function App() {
  const [data, setData] = useState(0);

  function Increament() {
    setData(data+1)
  }

  function Decrement() {
    setData(data-1)
  }

  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={Increament}>Increament</button>
      <button onClick={Decrement}>Decrement </button>
    </div>
  );
}

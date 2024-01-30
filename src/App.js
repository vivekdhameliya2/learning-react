import { useState } from "react";
let i = 0;
export default function App() {
  
  const [data, setData] = useState(i);

  function updateData() {
    setData(i++);
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Increament</button>
    </div>
  );
}

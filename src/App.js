import { useState } from "react";

export default function App() {
const [data,setData]= useState("Vivek Dhameliya")


function updateData(){
    setData ("Hey! How are you?")
}
  return (
    <div className="App">
      <h1>{data}</h1>
      <button  onClick={updateData}>Update data</button>
    </div>
  );
}

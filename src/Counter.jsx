import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function HandelCLick() {
    const newCount = count + 1;
    setCount(newCount);
  }
  const handelReduce = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  return (
    <div style={{ border: "2px solid blue" }}>
      <h3>Count: {count}</h3>
      <button onClick={HandelCLick}>Add</button>
      <button onClick={handelReduce}>Reduce</button>
    </div>
  );
}

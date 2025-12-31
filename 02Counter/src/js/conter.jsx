import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(10);
  let addValue = () => {
    count = count + 1;
    setCount(count);
  };

  let removeValue = () => {
    count = count - 1;
    setCount(count);
  };

  return (
    <>
      <h2>This is Counter application</h2>
      <h2>Count Value : {count}</h2>
      <button onClick={addValue}>Add Value</button> ||
      <button onClick={removeValue}> Remove Value</button>
    </>
  );
}

export default Counter;

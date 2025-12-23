import "./index.css";
import { useState } from "react";
import Students, { TakeJSXAsProps } from "./PropsDemoOnArray";

// let massage = () => {
//   alert("hello world");
// };

function App() {
  let [fruit, setFruit] = useState("Apple");
  let massage = () => {
    alert("hello akash");
  };

  let change = () => {
    if (fruit === "Apple") {
      setFruit("Banana");
    } else if (fruit === "Banana") {
      setFruit("Pineapple");
    } else if (fruit === "Pineapple") {
      setFruit("Mango");
    } else if (fruit === "Mango") {
      setFruit("Orange");
    } else {
      setFruit("Apple");
    }
  };

  let students = ["Akash", "Raju", "Sujit", "Anil"];

  return (
    <div className="my-70 ml-120">
      <h1 className="text-3xl font-bold text-red-500 bg-yellow-400 w-1/4 my-2">
        Hello world!
      </h1>
      <h2>Fruit name is = {fruit}</h2>

      <button className="bg-green-500 p-3" onClick={massage}>
        click me
      </button>
      <button className="bg-red-500 p-3 mx-3 my-5" onClick={change}>
        Change Fruit name
      </button>

      <Students student={students} />

      <TakeJSXAsProps>
        <h1 style={{ color: "red", margin: "auto" }}>
          This is JSX passed as props
        </h1>
        <p>This paragraph is also passed as props</p>
      </TakeJSXAsProps>
    </div>
  );
}

export default App;

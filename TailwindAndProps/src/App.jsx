import { useState } from "react";
import "./App.css";
import MyName from "./PropsDemo/Name";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2 className="bg-green-400 text-black p-4 rounded-2xl mb-4 ">
        Tailwind CSS
      </h2>
      <MyName userName="Dipika Padukon" />
      <MyName clickMe="Follow Me" />
    </>
  );
}

export default App;

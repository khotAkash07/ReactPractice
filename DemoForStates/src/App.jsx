import { useState } from "react";
import UserToggel from "./UserTToggel.jsx";
import College from "./PropsDemo.jsx";
import { Students, ArrayOfStudents } from "./PropsDemo.jsx";
import "./App.css";
let App = () => {
  let [fruit, setFruit] = useState("Apple");
  let [user, setUser] = useState(true);
  let [valueButton, setValueButton] = useState("Hide User");
  function changeFruit() {
    if (fruit === "Apple") {
      setFruit("Banana");
    } else if (fruit === "Banana") setFruit("pineapple");
    else if (fruit === "pineapple") setFruit("orange");
    else if (fruit === "orange") setFruit("Mango");
    else if (fruit === "Mango") setFruit("Apple");
  }

  let changeButton = () => {
    setUser(!user);
    if (user) {
      setValueButton("Show User");
    } else {
      setValueButton("Hide User");
    }
  };

  let names = ["akash", "Abhishek", "Ankush", "Amol"];
  let [count, setCount] = useState(0);
  let [studName, setStudName] = useState(names[count]);

  let changeStudent = () => {
    setCount((count + 1) % names.length);
    setStudName(names[count]);
  };

  let studData = {
    name: "Akash Khot",
    age: 24,
    mail: "akash@example.com",
  };
  return (
    <>
      <table>
        <tr>
          <td>
            <button onClick={changeFruit}>ChanngeFruit</button>
          </td>
          <td>
            <h2>{fruit}</h2>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={changeButton}>{valueButton}</button>
          </td>
          <td>{user ? <UserToggel userName="AkashKhot" /> : null}</td>
        </tr>
        <tr>
          <td>
            <button onClick={changeStudent}>ChangeStudent</button>
          </td>
          <td>
            <College name={studName} />
          </td>
        </tr>
      </table>

      <hr />
      <Students students={studData} />

      <ArrayOfStudents students={names} />
    </>
  );
};

export default App;

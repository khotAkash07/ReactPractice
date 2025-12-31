import ChangeColor from "./PropsClockColor";
import { useState } from "react";

let Clock = () => {
  const [color, setColor] = useState("red");

  let SetColorr = (e) =>{
      setColor(e.target.value);
  }
  return(
      <>
          <div>
          <select style={{backgroundColor:color}} name="colorOptions" id="col" onChange={SetColorr}
                  className="ml-174 w-40 h-9 my-auto mt-50 text-white shadow-xl/50">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="white">White</option>
          </select>
        <ChangeColor color={color}/>
          </div>
     </>)
};

export default Clock;

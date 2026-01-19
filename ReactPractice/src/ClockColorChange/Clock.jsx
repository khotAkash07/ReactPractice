import ChangeColor from "./PropsClockColor";
import { useState } from "react";

let Clock = () => {
  const [color, setColor] = useState("red");

  let SetColor = (e) =>{
      setColor(e.target.value);
  }
  return(
      <>
          <div>
              <ChangeColor color={color}/>
          <select style={{backgroundColor:color}} name="colorOptions" id="col" onChange={SetColor}
                  className="ml-174 w-40 h-9 my-auto mt-5 text-white shadow-xl/50">
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="white">White</option>
          </select>

          </div>
     </>)
};

export default Clock;

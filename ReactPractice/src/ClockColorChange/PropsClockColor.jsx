import { useEffect, useState } from "react";

let ChangeColor = ({color}) => {

  let [time, setTime] = useState([]);

  useEffect(() => {
      setInterval(() => {
          let date = new Date().toLocaleTimeString();
          setTime(date);
      },1000);
  },[]);

  return (
    <>
      <div className="bg-cyan-300 p-4 w-[150px] mx-auto mt-4 font-bold shadow-xl/50">
        <h1 style={{ color: color }}>{time}</h1>
      </div>
    </>
  );
};

export default ChangeColor;
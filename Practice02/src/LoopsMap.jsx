import { useState } from "react";
import PlayerData from "./ReuseComponent";
let MapLoopDemo = () => {
  const players = [
    { id: 1, name: "Virat", age: 35, runs: 12000 },
    { id: 2, name: "Rohit", age: 36, runs: 10500 },
    { id: 3, name: "Dhoni", age: 42, runs: 10773 },
    { id: 4, name: "Rahul", age: 31, runs: 4500 },
    { id: 5, name: "Pant", age: 26, runs: 3200 },
    { id: 6, name: "Hardik", age: 30, runs: 2800 },
    { id: 7, name: "Jadeja", age: 35, runs: 2700 },
    { id: 8, name: "Gill", age: 24, runs: 1900 },
    { id: 9, name: "Iyer", age: 29, runs: 3600 },
    { id: 10, name: "Surya", age: 33, runs: 3400 },
  ];

  return (
    <>
      <h1 className="font-bold mt-10 text-center text-4xl ">Loop Example</h1>

      {players.map((player) => (
        <div key={player.id}>
          <PlayerData data={player} />
        </div>
      ))}
    </>
  );
};

export default MapLoopDemo;

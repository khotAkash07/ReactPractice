import { useState } from "react";

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
      <h1 className="font-bold">Loop Example</h1>
      <table
        border="1"
        className="shadow-[0px_60px_60px_-10px_rgb(38,57,77)] bg-green-300 w-[300px] p-4 [&>*]:border-1 [&_th]:border-1 [&_td]:border-1"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Runs</th>
          </tr>
        </thead>
        <tbody>
          {players.map((p) => (
            <tr key={p.id} className="text-center">
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.runs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MapLoopDemo;
